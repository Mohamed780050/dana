/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "./db";
import { currentUser } from "@clerk/nextjs/server";

export async function getAllOrders() {
  try {
    const user = await currentUser();
    console.log(user?.id);
    if (!user) throw new Error("Not authorized");
    const findOrders = await db.orders.findMany({ where: { userId: user.id } });
    return findOrders;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
