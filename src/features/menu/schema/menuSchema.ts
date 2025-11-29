import z from "zod";

export const categorySchema = z.object({
  category_name: z.string().min(1, "Do not let the field empty."),
});

export const categoryItem = z.object({
  name: z.string().min(1, "Don't let it empty.").max(80, "Too Much chars."),
  price: z.number().min(1, "Don't let this field empty."),
  description: z.string().min(1, "Don't let this field empty."),
  image: z.url().optional(),
});
