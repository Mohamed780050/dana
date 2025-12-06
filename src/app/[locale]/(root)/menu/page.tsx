import PageTitle from "@/components/PageTitle";
import AddCategory from "@/features/menu/_components/AddCategory";
import Categories from "@/features/menu/_components/Categories";
import CategorySkeleton from "@/features/menu/skeletons/CategorySkeleton";
import { auth } from "@clerk/nextjs/server";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export default async function page() {
  const { orgRole } = await auth();
  if (orgRole === undefined) return redirect("/employees");

  if (orgRole === "org:delivery" || orgRole === "org:cashier")
    return redirect("/orders");

  const t = await getTranslations("Menu");

  return (
    <div className="space-y-8">
      <PageTitle title={t("title")} description={t("description")} />
      <AddCategory />
      <Suspense fallback={<CategorySkeleton />}>
        <Categories />
      </Suspense>
    </div>
  );
}
