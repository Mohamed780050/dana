/* eslint-disable @typescript-eslint/no-explicit-any */
// "use server";
import { db } from "./db";
import { currentUser } from "@clerk/nextjs/server";

export async function getRestaurantDetails() {
  try {
    const user = await currentUser();

    if (!user) throw new Error("Not authorized");

    return await db.restaurant.findUnique({ where: { userId: user.id } });
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function getRestaurantDetailsForPublicRoute(id: string) {
  try {
    return await db.restaurant.findUnique({ where: { id } });
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
