"use server";
import z from "zod";
import { MenuCategoryState } from "@/interfaces/interface";
import { categorySchema } from "../schema/menuSchema";
import { createCategory } from "@/lib/menus";
import { revalidatePath } from "next/cache";

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
