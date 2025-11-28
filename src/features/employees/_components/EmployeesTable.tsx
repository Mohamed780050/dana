"use client";
import { employees } from "@/interfaces/interface";
import UserTable from "./UserTable";
import { useOrganization } from "@clerk/clerk-react";

export default function EmployeesTable({
  orgId,
  orgRole,
}: {
  orgId: string;
  orgRole: string | null | undefined;
}) {
  const { isLoaded, memberships } = useOrganization({
    memberships: { pageSize: 10 },
  });
  console.log(memberships);
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
      <UserTable users={users} />
    </div>
  );
}
