"use server";
import { CartState, OrderItemInterface } from "@/interfaces/interface";
import z from "zod";
import { cartSchema } from "../schema/schema";
import { getUserOrgIds } from "@/lib/orgs";
import Orders from "@/models/orders";

export async function saveOrder(
  orders: OrderItemInterface[],
  total_amount: number,
  paymentMethod: "cash" | "Visa",
  userId: string,
  prevState: CartState,
  formData: FormData,
): Promise<CartState> {
  try {
    const tableNumberChanged = parseInt(
      formData.get("tableNumber") as string,
      10,
    );
    const validate = cartSchema.safeParse({
      orders: orders,
      customer_name: formData.get("category_name"),
      customer_phone: formData.get("phone"),
      total_amount,
      location: formData.get("location"),
      tableNumber: tableNumberChanged || 0,
      address: formData.get("address"),
    });
    console.log(validate);
    if (!validate.success)
      return {
        errors: z.flattenError(validate.error).fieldErrors,
        success: false,
      };
    const orgId = await getUserOrgIds(userId);

    const MyOrder = new Orders(
      userId,
      validate.data.customer_name,
      validate.data.customer_phone,
      total_amount,
      "Pending",
      "unPaid",
      validate.data.tableNumber,
      validate.data.location,
      validate.data.address,
      orgId,
      orders,
    );
    await MyOrder.save();
    return { message: null, success: true };
  } catch (error) {
    console.log(error);
    return { message: "server Error", success: false };
  }
}
