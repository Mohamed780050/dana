/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "./db";
import { currentUser } from "@clerk/nextjs/server";
import { getUserOrgIds } from "./orgs";

export async function getAllOrders() {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");
    const orgId = await getUserOrgIds(user.id);
    const findOrders = await db.orders.findMany({ where: { orgId } });
    return findOrders;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
