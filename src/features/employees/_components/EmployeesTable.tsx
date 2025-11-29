// "use client";
import { employees } from "@/interfaces/interface";
import UserTable from "./UserTable";
import { useOrganization } from "@clerk/clerk-react";
import { clerkClient } from "@clerk/nextjs/server";

export default async function EmployeesTable({
  orgId,
  orgRole,
}: {
  orgId: string;
  orgRole: string | null | undefined;
}) {
  const client = await clerkClient();
  const { data } = await client.organizations.getOrganizationMembershipList({
    organizationId: orgId,
    offset: 0,
  });
  const myUsers: {
    userId: string;
    identifier: string;
    firstName: string | null;
    lastName: string | null;
    // role: string;
  }[] = [];

  await data.map( (user) => {
    if (!user.publicUserData) return;
    const { firstName, lastName, userId, identifier } = user.publicUserData;
    // const { data } = await client.users.getOrganizationMembershipList({
    //   userId,
    // });
    if (
      myUsers.includes({
        firstName,
        lastName,
        identifier,
        userId,
        // role: data[0].role,
      })
    )
      return;
    myUsers.push({
      firstName,
      lastName,
      identifier,
      userId,
      // role: data[0].role,
    });
    console.log(myUsers);
  });

  const users: employees[] = [
    {
      id: "1",
      name: "mohamed",
      email: "something@anything.com",
      createdAt: "1/12/2024",
      role: "cashier",
    },
    {
      id: "2",
      name: "mohamed",
      email: "something@anything.com",
      createdAt: "1/12/2024",
      role: "cashier",
    },
    {
      id: "3",
      name: "mohamed",
      email: "something@anything.com",
      createdAt: "1/12/2024",
      role: "cashier",
    },
  ];
  return (
    <div>
      <UserTable users={myUsers} />
    </div>
  );
}
