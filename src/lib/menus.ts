/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { revalidatePath } from "next/cache";
import { db } from "./db";
import { currentUser } from "@clerk/nextjs/server";

export async function getAllCategories() {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");
    const findCategories = await db.menu.findMany({
      where: { userId: user.id },
    });
    return findCategories;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function createCategory(category_name: string) {
  try {
    const user = await currentUser();

    if (!user) throw new Error("Not authorized");

    await db.menu.create({
      data: {
        userId: user.id,
        name: category_name,
      },
    });
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function getAllMenuItems(id: string) {
  try {
    const user = await currentUser();

    if (!user) throw new Error("Not authorized");
    return await db.menuItem.findMany({ where: { menuId: id } });
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function deleteMenuItem(id: string) {
  try {
    const user = await currentUser();

    if (!user) throw new Error("Not authorized");
    await db.menuItem.delete({
      where: {
        id,
      },
    });
    revalidatePath("/menu");
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
