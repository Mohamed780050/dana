import { employees } from "@/interfaces/interface";
import UserTable from "./UserTable";

export default function EmployeesTable({
  orgId,
  orgRole,
}: {
  orgId: string;
  orgRole: string | null | undefined;
}) {
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
