/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { revalidatePath } from "next/cache";
import { db } from "./db";
import { currentUser } from "@clerk/nextjs/server";
import { getUserOrgIds } from "./orgs";

export async function getAllCategories() {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");
    const orgId = await getUserOrgIds(user.id);
    const findCategories = await db.menu.findMany({
      where: { orgId },
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
    const orgId = await getUserOrgIds(user.id);

    await db.menu.create({
      data: {
        userId: user.id,
        name: category_name,
        orgId,
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

    const orgId = await getUserOrgIds(user.id);

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

    const orgId = await getUserOrgIds(user.id);
    await db.menuItem.delete({
      where: {
        id,
      },
    });
    await db.cardsStatus.update({
      where: { orgId },
      data: { menuItem: { decrement: 1 } },
    });
    revalidatePath("/menu");
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function deleteCategory(id: string) {
  try {
    const user = await currentUser();

    if (!user) throw new Error("Not authorized");
    await db.menu.delete({
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

export async function addItemToCategory(
  name: string,
  description: string,
  price: number,
  menuId: string,
  image: string | undefined,
) {
  try {
    const user = await currentUser();

    if (!user) throw new Error("Not authorized");
    const orgId = await getUserOrgIds(user.id);

    await db.menuItem.create({
      data: {
        image,
        name,
        description,
        price,
        menuId,
        userId: user.id,
        orgId,
      },
    });
    await db.cardsStatus.update({
      where: {
        orgId,
      },
      data: {
        menuItem: { increment: 1 },
      },
    });
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
