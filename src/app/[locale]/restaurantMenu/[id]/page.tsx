import Restaurant from "@/features/public restaurant/_components/Restaurant";
import { db } from "@/lib/db";
import { getRestaurantDetailsForPublicRoute } from "@/lib/restaurant";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";
export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const restaurant = await getRestaurantDetailsForPublicRoute(id);
  if (!restaurant) throw new Error("Not found");
  await db.cardsStatus.update({
    where: { userId: restaurant.userId },
    data: { views: { increment: 1 } },
  });
  const t = await getTranslations("RestaurantPublic");
  return (
    <div>
      {restaurant ? (
        <Restaurant restaurant={restaurant} />
      ) : (
        <div>{t("NotFound")}</div>
      )}
    </div>
  );
}
