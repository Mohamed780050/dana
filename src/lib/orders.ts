/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { db } from "./db";
import { currentUser } from "@clerk/nextjs/server";
import { getUserOrgIds } from "./orgs";
import { revalidatePath } from "next/cache";

export async function getAllOrders() {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");
    const orgId = await getUserOrgIds(user.id);
    const findOrders = await db.orders.findMany({
      where: { orgId },
      orderBy: {
        created_at: "desc",
      },
    });
    return findOrders;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function makeItPaid(id: string) {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");
    await db.orders.update({
      where: { id },
      data: {
        payment_status: "Paid",
      },
    });
    revalidatePath("/orders");
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
export async function makeItCompleted(id: string) {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");
    const orgId = await getUserOrgIds(user.id);

    const orderData = await db.orders.findUnique({ where: { id } });
    if (!orderData) throw new Error("order not found");
    await db.orders.update({
      where: { id },
      data: {
        status: "Completed",
      },
    });

    if (orderData.status === "Pending")
      await db.totalOrders.update({
        where: { orgId },
        data: {
          pending: { decrement: 1 },
          completed: { increment: 1 },
        },
      });

    if (orderData.status === "Processing")
      await db.totalOrders.update({
        where: { orgId },
        data: {
          processing: { decrement: 1 },
          completed: { increment: 1 },
        },
      });
    revalidatePath("/orders");
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
export async function makeItDelivered(id: string) {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");
    await db.orders.update({
      where: { id },
      data: {
        isDelivered: true,
      },
    });
    revalidatePath("/orders");
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
