import PageTitle from "@/components/PageTitle";
import OverView from "@/features/dashboard/_components/OverView/OverView";
import Plan from "@/features/dashboard/_components/Plan";
import StatusCards from "@/features/dashboard/_components/StatusCards";
import OverViewSkeleton from "@/features/dashboard/skeleton/OverViewSkeleton";
import StatusCardSkeleton from "@/features/dashboard/skeleton/StatusCardSkeleton";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export default async function page() {
  const { orgRole } = await auth();
  if (orgRole === undefined) return redirect("/employees");
  if (orgRole === "org:delivery" || orgRole === "org:cashier")
    return redirect("/orders");
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
