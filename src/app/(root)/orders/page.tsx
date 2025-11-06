import PageTitle from "@/components/PageTitle";
import Filter from "@/features/Orders/_components/Filter";
import OrderTable from "@/features/Orders/_components/OrderTable";

export default function page() {
  return (
    <div className="space-y-8">
      <PageTitle
        title="Orders"
        description="Manage and track all your restaurant orders."
      />
      <Filter />
      <OrderTable />
    </div>
  );
}
