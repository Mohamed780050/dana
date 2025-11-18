/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { OrderState } from "@/interfaces/interface";
import { orderSchema } from "../schema/order";
import z from "zod";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createOrder(
  prevState: OrderState,
  formData: FormData,
): Promise<OrderState> {
  try {
    const user = await currentUser();
    if (!user?.id) return { message: "Not authorized" };

    const validate = orderSchema.safeParse({
      customer_name: formData.get("customer_name"),
      customer_phone: formData.get("customer_phone"),
      total_amount: 50,
      status: formData.get("status"),
      payment_status: formData.get("payment_status"),
    });

    if (!validate.success)
      return { errors: z.flattenError(validate.error).fieldErrors };

    const {
      customer_name,
      customer_phone,
      payment_status,
      status,
      total_amount,
    } = validate.data;
    const order = await db.orders.create({
      data: {
        userId: user.id,
        customer_name,
        customer_phone,
        payment_status,
        status,
        total_amount,
      },
    });
    await db.cardsStatus.update({
      where: { userId: user.id },
      data: {
        totalOrders: { increment: 1 },
      },
    });

    await db.cardsStatus.update({
      where: { userId: user.id },
      data: {
        salesVolume: {
          increment: order.total_amount,
        },
      },
    });

    const updateData: any = {};
    if (order.status === "Completed") {
      updateData.completed = { increment: 1 };
    } else if (order.status === "Pending") {
      updateData.pending = { increment: 1 };
    } else if (order.status === "Processing") {
      updateData.processing = { increment: 1 };
    }
    await db.totalOrders.update({
      where: { userId: user.id },
      data: updateData,
    });

    await db.salesAnalytics.update({
      where: { userId: user.id },
      data: {
        today: { increment: order.total_amount },
        thisWeek: { increment: order.total_amount },
        thisMonth: { increment: order.total_amount },
      },
    });
    revalidatePath("/orders");
    return { message: null, errors: undefined };
  } catch (error: any) {
    console.log(error);

    return {
      errors: undefined,
      message: "Database Error: Failed to Create Invoice.",
    };
  }
}
