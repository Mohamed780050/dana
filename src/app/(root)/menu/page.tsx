import PageTitle from "@/components/PageTitle";
import AddCategory from "@/features/menu/_components/AddCategory";

export default function page() {
  return (
    <div className="space-y-8">
      <PageTitle
        title="Menu Management"
        description="Organize your menu with categories and items."
      />
      <AddCategory />
    </div>
  );
}
