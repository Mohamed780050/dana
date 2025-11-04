import PageTitle from "@/components/PageTitle";
import Filter from "@/features/Orders/_components/Filter";

export default function page() {
  return (
    <div className="space-y-8">
      <PageTitle
        title="Orders"
        description="Manage and track all your restaurant orders."
      />
      <Filter />
    </div>
  );
}
