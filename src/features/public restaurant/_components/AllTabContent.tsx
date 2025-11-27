import { db } from "@/lib/db";
import { TabsContent } from "@radix-ui/react-tabs";
import { currentUser } from "@clerk/nextjs/server";
import { Utensils } from "lucide-react";
import ItemImage from "./ItemImage";
import ItemInfo from "./ItemInfo";

export async function AllTabContent({
  value,
  currency
}: {
  value: string;
  currency: "USD" | "EUR" | "GBP" | "EGP";
}) {
  const user = await currentUser();
  if (!user) return null;
  const menuItems = await db.menuItem.findMany({ where: { userId: user.id } });
  return (
    <TabsContent value={value}>
      {menuItems.length ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
            >
              <ItemImage url={item.image} alt={item.name} />
              <ItemInfo
                description={item.description}
                name={item.name}
                price={item.price}
                currency={currency}
                itemId={item.id}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <Utensils className="mx-auto mb-4 h-16 w-16 text-slate-300" />
          <p className="text-xl font-medium text-slate-600">
            No items available
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Check back later for delicious options!
          </p>
        </div>
      )}
    </TabsContent>
  );
}
