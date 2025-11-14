import Restaurant from "@/features/public restaurant/_components/Restaurant";
import RestaurantDetails from "@/features/public restaurant/_components/RestaurantDetails";
import { getRestaurantDetailsForPublicRoute } from "@/lib/restaurant";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const restaurant = await getRestaurantDetailsForPublicRoute(id);
  return (
    <div>
      {restaurant ? (
        <Restaurant restaurant={restaurant} />
      ) : (
        <div>not found</div>
      )}
    </div>
  );
}
