import z, { email } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1, "Don't let this empty."),
  lastName: z.string().min(1, "Don't let this empty."),
  email: z.email().min(1, "don't let this empty"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .refine((pw) => /[a-z]/.test(pw), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((pw) => /[A-Z]/.test(pw), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((pw) => /\d/.test(pw), {
      message: "Password must contain at least one digit",
    })
    .refine((pw) => /[!@#$%^&*(),.?\":{}|<>_\-\[\]\\\/~`+=]/.test(pw), {
      message: "Password must contain at least one special character",
    }),
});
