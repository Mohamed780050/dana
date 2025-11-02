/* eslint-disable @typescript-eslint/no-explicit-any */
// "use server";
import { db } from "./db";
import { currentUser } from "@clerk/nextjs/server";
export async function getSalesStatus() {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");
    const findSales = await db.salesAnalytics.findUnique({
      where: { userId: user.id },
    });

    if (!findSales) {
      const sales = await db.salesAnalytics.create({
        data: {
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
