import { db } from "@/lib/db";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import RestaurantContent from "./RestaurantContent";
import Cart from "./Cart/Cart";
import { AllTabContent } from "./AllTabContent";
import { getRestaurantDetails } from "@/lib/restaurant";
import { getTranslations } from "next-intl/server";

export default async function RestaurantMenu({ userId }: { userId: string }) {
  const menus = await db.menu.findMany({ where: { userId } });
  //   const menuItems = await db.menuItem.findMany({where:{}})
  const details = await getRestaurantDetails();
  const t = await getTranslations("RestaurantPublic");
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Cart userId={userId} />
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <Tabs defaultValue="all" className="w-full">
            <div className="overflow-x-auto border-b border-slate-200 bg-slate-50 p-4">
              <TabsList className="flex min-w-max gap-3">
                <TabsTrigger
                  value="all"
                  className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-100 data-[state=active]:scale-105 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-600/30"
                >
                  {t("All")}
                </TabsTrigger>
                {menus.map((item) => (
                  <TabsTrigger
                    key={item.id}
                    value={item.name}
                    className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-100 data-[state=active]:scale-105 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-600/30"
                  >
                    {item.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <div className="p-8">
              <AllTabContent
                currency={details?.currency || "USD"}
                value="all"
              />
              {menus.map((item) => (
                <RestaurantContent
                  currency={details?.currency || "USD"}
                  value={item.name}
                  key={item.id}
                  id={item.id}
                />
              ))}
            </div>
          </Tabs>
        </div>
      </div>
      
    </>
  );
}


