import PageTitle from "@/components/PageTitle";
import StatusCards from "@/features/dashboard/_components/StatusCards";
import { Suspense } from "react";

export default function page() {
  return (
    <div className="space-y-8">
      <PageTitle
        title="Dashboard"
        description="Welcome back! Here's your restaurant overview."
      />
      <Suspense fallback={<div>Loading</div>}>
        <StatusCards />
      </Suspense>
    </div>
  );
}
