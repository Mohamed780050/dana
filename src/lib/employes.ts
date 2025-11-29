import { clerkClient, OrganizationMembership } from "@clerk/nextjs/server";

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
