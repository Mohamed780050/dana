"use server";
import { CartState } from "@/interfaces/interface";
import z from "zod";
import { cartSchema } from "../schema/schema";
import { db } from "@/lib/db";
import { getUserOrgIds } from "@/lib/orgs";

interface OrderInterface {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export async function saveOrder(
  orders: OrderInterface[],
  total_amount: number,
  paymentMethod: "cash" | "Visa",
  userId: string,
  prevState: CartState,
  formData: FormData,
): Promise<CartState> {
  try {
    const tableNumberChanged = parseInt(
      formData.get("tableNumber") as string,
      10,
    );
    const validate = cartSchema.safeParse({
      orders,
      customer_name: formData.get("category_name"),
      customer_phone: formData.get("phone"),
      total_amount,
      location: formData.get("location"),
      tableNumber: tableNumberChanged,
    });
    console.log(validate);
    if (!validate.success)
      return { errors: z.flattenError(validate.error).fieldErrors };
    const orgId = await getUserOrgIds(userId);
    await db.orders.create({
      data: {
        customer_name: validate.data.customer_name,
        customer_phone: validate.data.customer_phone,
        total_amount,
        items: { create: validate.data.orders },
        userId,
        tableNumber: validate.data.tableNumber,
        orgId,
      },
    });
    await db.cardsStatus.update({
      where: { userId },
      data: {
        salesVolume: { increment: total_amount },
        totalOrders: { increment: 1 },
      },
    });

    await db.totalOrders.update({
      where: { userId },
      data: {
        pending: { increment: 1 },
      },
    });

    await db.salesAnalytics.update({
      where: { userId },
      data: {
        today: total_amount,
        thisWeek: total_amount,
        thisMonth: total_amount,
      },
    });
    return { message: null };
  } catch (error) {
    console.log(error);
    return { message: "server Error" };
  }
}
