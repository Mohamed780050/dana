import Restaurant from "@/features/public restaurant/_components/Restaurant";
import { db } from "@/lib/db";
import { getRestaurantDetailsForPublicRoute } from "@/lib/restaurant";

export const dynamic = "force-dynamic";
export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const restaurant = await getRestaurantDetailsForPublicRoute(id);
  if (!restaurant) throw new Error("Not found");
  await db.cardsStatus.update({
    where: { userId: restaurant.userId },
    data: { views: { increment: 1 } },
  });
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
