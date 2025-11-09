import PageTitle from "@/components/PageTitle";
import AddCategory from "@/features/menu/_components/AddCategory";
import Categories from "@/features/menu/_components/Categories";
import { Suspense } from "react";

export default function page() {
  return (
    <div className="space-y-8">
      <PageTitle
        title="Menu Management"
        description="Organize your menu with categories and items."
      />
      <AddCategory />
      <Suspense fallback={<div>Is loading</div>}>
        <Categories />
      </Suspense>
    </div>
  );
}
