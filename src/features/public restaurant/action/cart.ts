"use server";
import { CartState } from "@/interfaces/interface";
import z from "zod";
import { cartSchema } from "../schema/schema";

interface OrderInterface {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export async function saveOrder(
  orders: OrderInterface[],
  total_amount: number,
  paymentMethod: "cash" | "Visa",
  prevState: CartState,
  formData: FormData,
): Promise<CartState> {
  try {
    const validate = cartSchema.safeParse({
      orders,
      customer_name: formData.get("category_name"),
      customer_phone: formData.get("phone"),
      total_amount,
    });
    console.log(validate.data);
    if (!validate.success)
      return { errors: z.flattenError(validate.error).fieldErrors };
    
    return { message: null };
  } catch (error) {
    console.log(error);
    return { message: "server Error" };
  }
}
