import z from "zod";

export const restaurantDetailsSchema = z.object({
  name: z.string().min(1, "Don't let this field empty."),
  phone: z.string().min(1, "Don't let this field empty."),
  description: z.string().min(30, "less than 30 char."),
  address: z.string().min(1, "Don't let this field empty."),
  currency: z.enum(["USD", "EUR", "GBP"]),
  wa_phone: z.string().min(1, "Don't let this field empty."),
});

export const restaurantSocialSchema = z.object({
  facebook: z.url().min(1, "Don't let this empty.").optional(),
  instagram: z.url().min(1, "Don't let this empty.").optional(),
  linkedIn: z.url().min(1, "Don't let this empty.").optional(),
});
