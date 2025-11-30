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
      where: { orgId },
    });
    if (!findSales) {
      const sales = await db.salesAnalytics.create({
        data: {
          userId: user.id,
          orgId,
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

export async function getCardsStatus() {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");
    const orgId = await getUserOrgIds(user.id);
    const findCardsStatus = await db.cardsStatus.findUnique({
      where: { orgId },
    });

    if (!findCardsStatus) {
      const cardsStatus = await db.cardsStatus.create({
        data: {
          userId: user.id,
          orgId,
        },
      });
      return [
        cardsStatus.totalOrders,
        cardsStatus.salesVolume,
        cardsStatus.menuItem,
        cardsStatus.views,
      ];
    }
    return [
      findCardsStatus.totalOrders,
      findCardsStatus.salesVolume,
      findCardsStatus.menuItem,
      findCardsStatus.views,
    ];
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function getTotalOrdersStatus() {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");
    const orgId = await getUserOrgIds(user.id);
    const totalOrders = await db.totalOrders.findUnique({
      where: { orgId },
    });

    if (!totalOrders) {
      const orders = await db.totalOrders.create({
        data: {
          userId: user.id,
          orgId,
        },
      });
      return orders;
    }
    return totalOrders;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
