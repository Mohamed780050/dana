import PageTitle from "@/components/PageTitle";
import OverView from "@/features/dashboard/_components/OverView/OverView";
import Plan from "@/features/dashboard/_components/Plan";
import StatusCards from "@/features/dashboard/_components/StatusCards";
import OverViewSkeleton from "@/features/dashboard/skeleton/OverViewSkeleton";
import StatusCardSkeleton from "@/features/dashboard/skeleton/StatusCardSkeleton";
import { Suspense } from "react";

export default function page() {
  return (
    <div className="space-y-8">
      <PageTitle
        title="Dashboard"
        description="Welcome back! Here's your restaurant overview."
      />
      <Suspense fallback={<StatusCardSkeleton />}>
        <StatusCards />
      </Suspense>
      <Suspense fallback={<OverViewSkeleton />}>
        <OverView />
      </Suspense>
      <Plan />
    </div>
  );
}
