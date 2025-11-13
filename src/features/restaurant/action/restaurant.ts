"use server";
import { DetailsState } from "@/interfaces/interface";
import { currentUser } from "@clerk/nextjs/server";
import { restaurantDetailsSchema } from "../schema/restaurantSchema";
import z from "zod";

export async function EditRestaurantDetails(
  prevState: DetailsState,
  formData: FormData,
): Promise<DetailsState> {
  try {
    const user = await currentUser();
    if (!user?.id) return { message: "Not authorized" };

    const phoneNumber = formData.get("phone") as string;
    const FormattedPhoneNumber = parseFloat(phoneNumber);

    const WaPhoneNumber = formData.get("wa_phone") as string;
    const FormattedWaPhoneNumber = parseFloat(WaPhoneNumber);

    const validate = restaurantDetailsSchema.safeParse({
      name: formData.get("name"),
      phone: FormattedPhoneNumber,
      description: formData.get("description"),
      address: formData.get("address"),
      currency: formData.get("currency"),
      wa_phone: FormattedWaPhoneNumber,
    });

    if (!validate.success)
      return { errors: z.flattenError(validate.error).fieldErrors };

    const { name, phone, description, address, currency, wa_phone } =
      validate.data;

    return { message: undefined };
  } catch (error) {
    console.log(error);
    return { message: "Enteral server Error." };
  }
}
