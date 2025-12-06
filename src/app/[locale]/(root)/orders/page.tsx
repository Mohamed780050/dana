import PageTitle from "@/components/PageTitle";
import Filter from "@/features/Orders/_components/Filter";
import OrderTable from "@/features/Orders/_components/OrderTable";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export default async function page() {
  const { orgRole } = await auth();
  if (orgRole === undefined) return redirect("/employees");

  return (
    <div className="space-y-8">
      <PageTitle
        title="Orders"
        description="Manage and track all your restaurant orders."
      />
      <Filter />
      <OrderTable />
    </div>
  );
}
