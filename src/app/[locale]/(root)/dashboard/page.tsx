import PageTitle from "@/components/PageTitle";
import OverView from "@/features/dashboard/_components/OverView/OverView";
import Plan from "@/features/dashboard/_components/Plan";
import StatusCards from "@/features/dashboard/_components/StatusCards";
import OverViewSkeleton from "@/features/dashboard/skeleton/OverViewSkeleton";
import StatusCardSkeleton from "@/features/dashboard/skeleton/StatusCardSkeleton";
import { auth } from "@clerk/nextjs/server";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata = {
  title: "Dashboard",
};
export const dynamic = "force-dynamic";
export default async function page() {
  const { orgRole } = await auth();
  if (orgRole === undefined) return redirect("/employees");
  if (orgRole === "org:delivery" || orgRole === "org:cashier")
    return redirect("/orders");
  const t = await getTranslations("Dashboard");

  return (
    <div className="space-y-8">
      <PageTitle title={t("title")} description={t("description")} />
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
