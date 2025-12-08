import PageTitle from "@/components/PageTitle";
import Filter from "@/features/Orders/_components/Filter";
import OrderTable from "@/features/Orders/_components/OrderTable";
import { auth } from "@clerk/nextjs/server";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Orders",
};
export const dynamic = "force-dynamic";
export default async function page() {
  const { orgRole } = await auth();
  if (orgRole === undefined) return redirect("/employees");
  const t = await getTranslations("Orders");

  return (
    <div className="space-y-8">
      <PageTitle
        title={t("title")}
        description={t("description")}
      />
      <Filter />
      <OrderTable />
    </div>
  );
}
