"use server";
import { UserState } from "@/interfaces/interface";
import { revalidatePath } from "next/cache";
import { flattenError } from "zod";
import { userSchema } from "../schema/userSchema";
import { clerkClient, auth } from "@clerk/nextjs/server";

export async function addUser(
  prevState: UserState,
  formData: FormData,
): Promise<UserState> {
  try {
    const validate = userSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
    });
    if (!validate.success)
      return { errors: flattenError(validate.error).fieldErrors };
    // your logic
    const { orgId } = await auth();
    if (!orgId) return { message: "Something went wrong." };
    const { email, password, firstName, lastName } = validate.data;
    const client = await clerkClient();
    const user = await client.users.createUser({
      firstName,
      lastName,
      emailAddress: [email],
      password,
    });
    await client.organizations.createOrganizationMembership({
      organizationId: orgId,
      userId: user.id,
      role: "org:delivery",
    });
    revalidatePath("/");
    return { message: null };
  } catch (error) {
    console.log(error);
    return { message: "server Error" };
  }
}
