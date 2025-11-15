import { db } from "@/lib/db";
import { TabsContent } from "@radix-ui/react-tabs";
import { ImageIcon, Utensils } from "lucide-react";
import Image from "next/image";
import ItemImage from "./ItemImage";
import ItemInfo from "./ItemInfo";

export default async function RestaurantContent({
  value,
  id,
}: {
  value: string;
  id: string;
}) {
  const MenuItems = await db.menuItem.findMany({ where: { menuId: id } });
  console.log(MenuItems);
  return (
    <TabsContent value={value}>
      {MenuItems.length ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MenuItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
            >
              <ItemImage url={item.image} alt={item.name} />
              <ItemInfo description={item.description} name={item.name} price={item.price} currency="USD" />
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
