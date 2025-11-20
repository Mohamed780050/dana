import PageTitle from "@/components/PageTitle";
import AddCategory from "@/features/menu/_components/AddCategory";
import Categories from "@/features/menu/_components/Categories";
import CategorySkeleton from "@/features/menu/skeletons/CategorySkeleton";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export default function page() {
  return (
    <div className="space-y-8">
      <PageTitle
        title="Menu Management"
        description="Organize your menu with categories and items."
      />
      <AddCategory />
      <Suspense fallback={<CategorySkeleton />}>
        <Categories />
      </Suspense>
    </div>
  );
}
