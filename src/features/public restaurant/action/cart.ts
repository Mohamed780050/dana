"use server";
import { CartState } from "@/interfaces/interface";
import z from "zod";
import { cartSchema } from "../schema/shema";
import { revalidatePath } from "next/cache";

export async function addCategory(
  prevState: CartState,
  formData: FormData,
): Promise<CartState> {
  try {
    const validate = cartSchema.safeParse({
      category_name: formData.get("category_name"),
    });
    if (!validate.success)
      return { errors: z.flattenError(validate.error).fieldErrors };
    // await createCategory(validate.data.category_name);
    return { message: null };
  } catch (error) {
    console.log(error);
    return { message: "server Error" };
  }
}
