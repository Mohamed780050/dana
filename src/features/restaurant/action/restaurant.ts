"use server";
import { DetailsState, SocialState } from "@/interfaces/interface";
import { currentUser } from "@clerk/nextjs/server";
import {
  restaurantDetailsSchema,
  restaurantSocialSchema,
} from "../schema/restaurantSchema";
import z from "zod";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function EditRestaurantDetails(
  prevState: DetailsState,
  formData: FormData,
): Promise<DetailsState> {
  try {
    const user = await currentUser();
    if (!user?.id) return { message: "Not authorized" };

    const validate = restaurantDetailsSchema.safeParse({
      name: formData.get("name"),
      phone: formData.get("phone"),
      description: formData.get("description"),
      address: formData.get("address"),
      currency: formData.get("currency"),
      wa_phone: formData.get("wa_phone"),
    });

    if (!validate.success)
      return { errors: z.flattenError(validate.error).fieldErrors };

    const { name, phone, description, address, currency, wa_phone } =
      validate.data;

    const findRestaurant = await db.restaurant.findUnique({
      where: {
        userId: user.id,
      },
    });

    if (!findRestaurant)
      await db.restaurant.create({
        data: {
          userId: user.id,
          name,
          phone,
          description,
          address,
          currency,
          wa_phone,
        },
      });

    await db.restaurant.update({
      where: {
        userId: user.id,
      },
      data: {
        name,
        phone,
        description,
        address,
        currency,
        wa_phone,
      },
    });

    revalidatePath("/restaurant");
    return { message: undefined };
  } catch (error) {
    console.log(error);
    return { message: "Enteral server Error." };
  }
}

export async function EditRestaurantSocial(
  prevState: SocialState,
  formData: FormData,
): Promise<SocialState> {
  try {
    const user = await currentUser();
    if (!user?.id) return { message: "Not authorized" };

    const validate = restaurantSocialSchema.safeParse({
      facebook: formData.get("facebook"),
      instagram: formData.get("instagram"),
      linkedIn: formData.get("linkedIn"),
    });

    if (!validate.success)
      return { errors: z.flattenError(validate.error).fieldErrors };

    const { facebook, instagram, linkedIn } = validate.data;

    const findRestaurant = await db.restaurant.findUnique({
      where: {
        userId: user.id,
      },
    });

    if (!findRestaurant) return { message: "create your restaurant First." };

    await db.restaurant.update({
      where: {
        userId: user.id,
      },
      data: { facebook, instagram, linkedIn },
    });

    revalidatePath("/restaurant");
    return { message: undefined };
  } catch (error) {
    console.log(error);
    return { message: "Enteral server Error." };
  }
}
