"use server";
import { currentUser } from "@clerk/nextjs/server";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { getUserOrgIds } from "./orgs";
import { db } from "./db";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  signature_algorithm: "sha256",
});

export async function uploadToCloudinaryLogoRestaurant(
  buffer: Buffer | string,
): Promise<string> {
  // Returns the secure URL string of the uploaded image
  try {
    const user = await currentUser();
    if (!user) throw new Error("Not authorized");
    const orgId = await getUserOrgIds(user.id);
    const findRestaurant = await db.restaurant.findUnique({ where: { orgId } });
    if (!findRestaurant) throw new Error("Restaurant Not found.");

    const base64 = buffer.toString("base64");
    const result = await cloudinary.uploader.upload(base64);
    await db.restaurant.update({
      where: { id: findRestaurant.id },
      data: { logo: result.secure_url },
    });

    return result.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary", error);
    throw error;
  }
}
