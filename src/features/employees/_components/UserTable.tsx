import { Button } from "@/components/ui/button";
import { clerkClient } from "@clerk/nextjs/server";
import { Edit2, Trash2 } from "lucide-react";
import UserDeleting from "./UserDeleting";

export default function UserTable({
  users,
}: {
  users: {
    userId: string;
    identifier: string;
    firstName: string | null;
    lastName: string | null;
    // role: string;
  }[];
}) {
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "org:admin":
        return "bg-purple-900 text-purple-200";
      case "org:cashier":
        return "bg-blue-900 text-blue-200";
      case "org:delivery":
        return "bg-green-900 text-green-200";
      default:
        return "bg-slate-700 text-slate-200";
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="px-6 py-4 text-left font-semibold">Name</th>
            <th className="px-6 py-4 text-left font-semibold">Email</th>
            <th className="px-6 py-4 text-left font-semibold">Role</th>
            {/* <th className="px-6 py-4 text-left font-semibold">Created</th> */}
            <th className="px-6 py-4 text-right font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(async (user) => {
            const client = await clerkClient();
            const { data } = await client.users.getOrganizationMembershipList({
              userId: user.userId,
            });
            console.log(data);
            return (
              <tr
                key={user.userId}
                className="border-b border-slate-700 transition-all duration-200 hover:from-slate-900/5"
                // onClick={() => onEdit(user)}
              >
                <td className="px-6 py-4">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4">{user.identifier}</td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium capitalize ${getRoleBadgeColor(data[0].role.split(":")[1])}`}
                  >
                    {data[0].role.split(":")[1]}
                  </span>
                </td>
                {/* <td className="px-6 py-4">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td> */}
                {data[0].role !== "org:admin" && (
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <UserDeleting userId={user.userId}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-400 hover:bg-red-700/70 hover:text-red-100"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </UserDeleting>
                    </div>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
