import PageTitle from "@/components/PageTitle";
import RestaurantTabs from "@/features/restaurant/_components/RestaurantTabs";

export const dynamic = "force-dynamic";
export default function page() {
  return (
    <div className="space-y-6">
      <PageTitle
        title="Restaurant Settings"
        description="Manage your restaurant information and working hours."
      />
      <RestaurantTabs />
    </div>
  );
}
