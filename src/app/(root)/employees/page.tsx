import PageTitle from "@/components/PageTitle";
import HaveAnOrg from "@/features/employees/HaveAnOrg";
import { Suspense } from "react";

export default function page() {
  return (
    <div className="space-y-8">
      <PageTitle
        title="Employees"
        description="You can manage your employees from here."
      />
      <Suspense fallback={<div>loading</div>}>
        <HaveAnOrg />
      </Suspense>
    </div>
  );
}
