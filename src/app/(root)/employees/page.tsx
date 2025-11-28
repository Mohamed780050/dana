import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import AddUser from "@/features/employees/_components/AddUser";
import HaveAnOrg from "@/features/employees/_components/HaveAnOrg";
import { auth } from "@clerk/nextjs/server";
import { PlusCircle } from "lucide-react";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function page() {
  const { orgRole } = await auth();
    if (orgRole === "org:delivery" || orgRole === "org:cashier") return redirect("/orders");
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <PageTitle
          title="Employees"
          description="You can manage your employees from here."
        />
        <AddUser>
          <Button>
            <PlusCircle />
            Add user
          </Button>
        </AddUser>
      </div>
      <Suspense fallback={<div>loading</div>}>
        <HaveAnOrg />
      </Suspense>
    </div>
  );
}
