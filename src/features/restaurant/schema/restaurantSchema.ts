import z from "zod";

export const restaurantDetailsSchema = z.object({
  name: z.string().min(1, "Don't let this field empty."),
  phone: z.number().min(1, "Don't let this field empty."),
  description: z.string().min(30, "less than 30 char."),
  address: z.string().min(1, "Don't let this field empty."),
  currency: z.enum(["USD", "EUR", "GPB"]),
  wa_phone: z.number().min(1, "Don't let this field empty."),
});
