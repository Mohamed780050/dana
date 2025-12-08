import Restaurant from "@/features/public restaurant/_components/Restaurant";
import { db } from "@/lib/db";
import { getRestaurantDetailsForPublicRoute } from "@/lib/restaurant";
import { Utensils } from "lucide-react";
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
        <>
          <Restaurant restaurant={restaurant} />
        </>
      ) : (
        <>
          <div className="flex min-h-screen items-center justify-center bg-slate-50">
            <div className="text-center">
              <Utensils className="mx-auto mb-4 h-16 w-16 text-slate-300" />
              <h1 className="mb-2 text-2xl font-bold text-slate-900">
                Restaurant Not Found
              </h1>
              <p className="text-slate-600">
                The restaurant you&apos;re looking for doesn&apos;t exist.
              </p>
            </div>
          </div>
          <div>{t("NotFound")}</div>
        </>
      )}
    </div>
  );
}
