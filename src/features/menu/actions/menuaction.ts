"use server";
import z from "zod";
import { MenuCategoryState } from "@/interfaces/interface";
import { categorySchema } from "../schema/menuSchema";

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
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    return { message: null };
  } catch (error) {
    console.log(error);
    return { message: "server Error" };
  }
}
