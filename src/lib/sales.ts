/* eslint-disable @typescript-eslint/no-explicit-any */
// "use server";
import { db } from "./db";
import { currentUser } from "@clerk/nextjs/server";
import { getUserOrgIds } from "./orgs";
export async function getSalesStatus() {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");
    const orgId = await getUserOrgIds(user.id);
    const findSales = await db.salesAnalytics.findUnique({
      where: { orgId, userId: user.id },
    });

    if (!findSales) {
      const sales = await db.salesAnalytics.create({
        data: {
          orgId,
          userId: user.id,
        },
      });
      return sales;
    }
    return findSales;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
