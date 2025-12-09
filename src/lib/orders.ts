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
    await db.orders.update({
      where: { id },
      data: {
        status: "Completed",
      },
    });
    revalidatePath("/orders");
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
