import z from "zod";

const orderSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export const cartSchema = z.object({
  customer_name: z.string().min(1, "Put your name please."),
  orders: z.array(orderSchema),
  total_amount: z.number(),
  location: z.enum(["inSite", "Delivery"]),
  tableNumber: z.number().nullable(),
  address: z.string().nullable(),
  customer_phone: z
    .string()
    .min(7, { message: "Phone number is too short" })
    .max(15, { message: "Phone number is too long" })
    .regex(/^[+\d][\d\s-]+$/, { message: "Invalid phone number format" }),
});
