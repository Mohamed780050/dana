import PageTitle from "@/components/PageTitle";
import RestaurantTabs from "@/features/restaurant/_components/RestaurantTabs";
import UploadYourLogo from "@/features/restaurant/_components/UploadYourLogo";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export default async function page() {
  const { orgRole } = await auth();
  if (orgRole === undefined) return redirect("/employees");

  if (orgRole === "org:delivery" || orgRole === "org:cashier")
    return redirect("/orders");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <PageTitle
          title="Restaurant Settings"
          description="Manage your restaurant information and working hours."
        />
        <UploadYourLogo />
      </div>
      <RestaurantTabs />
    </div>
  );
}
