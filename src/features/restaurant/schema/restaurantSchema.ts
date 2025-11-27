import z from "zod";

export const restaurantDetailsSchema = z.object({
  name: z.string().min(1, "Don't let this field empty."),
  phone: z.string().min(1, "Don't let this field empty."),
  description: z.string().min(30, "less than 30 char."),
  address: z.string().min(1, "Don't let this field empty."),
  currency: z.enum(["USD", "EUR", "GBP","EGP"]),
  wa_phone: z.string().min(1, "Don't let this field empty."),
});

export const restaurantSocialSchema = z.object({
  facebook: z.string().url().or(z.literal("")).optional(),
  instagram: z.string().url().or(z.literal("")).optional(),
  linkedIn: z.string().url().or(z.literal("")).optional(),
});
