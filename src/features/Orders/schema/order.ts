import z from "zod";

export const orderSchema = z.object({
  customer_name: z.string().min(1, "Customer Name is empty."),
  customer_phone: z.string().min(1, "Customer Phone is empty."),
  total_amount: z.number(),
  status: z.enum(["Pending", "Processing", "Completed", "Cancelled"]),
  payment_status: z.enum(["Paid", "unPaid"]),
  tableNumber: z.number(),
});
