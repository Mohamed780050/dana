import { clerkClient } from "@clerk/nextjs/server";

export async function getUserOrgIds(userId: string): Promise<string> {
  const client = await clerkClient();
  const { data: memberships } =
    await client.users.getOrganizationMembershipList({ userId });

  const orgIds = memberships.map((m) => m.organization.id);
  return orgIds[0];
}
