"use server";
import z from "zod";
import { CategoryItemState, MenuCategoryState } from "@/interfaces/interface";
import { categoryItem, categorySchema } from "../schema/menuSchema";
import { addItemToCategory, createCategory } from "@/lib/menus";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";

export async function addCategory(
  prevState: MenuCategoryState,
  formData: FormData,
): Promise<MenuCategoryState> {
  try {
    const validate = categorySchema.safeParse({
      category_name: formData.get("category_name"),
    });
    if (!validate.success)
      return { errors: z.flattenError(validate.error).fieldErrors };
    await createCategory(validate.data.category_name);
    revalidatePath("/menu");
    return { message: null };
  } catch (error) {
    console.log(error);
    return { message: "server Error" };
  }
}

export async function addCategoryItem(
  id: string,
  prevState: MenuCategoryState,
  formData: FormData,
): Promise<CategoryItemState> {
  try {
    const priceValue = formData.get("price") as string;
    const FormattedPrice = parseFloat(priceValue);
    console.log(formData.get("name"));
    const validate = categoryItem.safeParse({
      name: formData.get("name"),
      price: FormattedPrice,
      description: formData.get("description"),
      image: formData.get("image"),
    });
    console.log(validate);
    if (!validate.success)
      return { errors: z.flattenError(validate.error).fieldErrors };

    const { name, description, price } = validate.data;
    await addItemToCategory(name, description, price, id);
    revalidatePath("/menu");

    return { message: null };
  } catch (error) {
    console.log(error);
    return { message: "Internal server error." };
  }
}
