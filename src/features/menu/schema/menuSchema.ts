import z from "zod";

export const categorySchema = z.object({
  category_name: z.string().min(1, "Do not let the field empty."),
});
