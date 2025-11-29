"use server";
import { clerkClient, OrganizationMembership } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getAndOrderEmployees(data: OrganizationMembership[]) {
  const client = await clerkClient();

  const myUsers: {
    userId: string;
    identifier: string;
    firstName: string | null;
    lastName: string | null;
    role: string;
  }[] = [];
  await data.map(async (user) => {
    if (!user.publicUserData) return;
    const { firstName, lastName, userId, identifier } = user.publicUserData;
    const { data } = await client.users.getOrganizationMembershipList({
      userId,
    });
    if (
      myUsers.includes({
        firstName,
        lastName,
        identifier,
        userId,
        role: data[0].role,
      })
    )
      return;
    myUsers.push({
      firstName,
      lastName,
      identifier,
      userId,
      role: data[0].role,
    });
    console.log(myUsers);
  });
  return myUsers;
}

export async function deleteUser(userId: string) {
  try {
    const client = await clerkClient();
    await client.users.deleteUser(userId);
    revalidatePath("/employees");
  } catch (error) {
    console.log(error);
  }
}
