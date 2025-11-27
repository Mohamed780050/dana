import { getAllMenuItems } from "@/lib/menus";
import ItemImage from "./CategoryItem/ItemImage";
import ItemDetails from "./CategoryItem/ItemDetails";
import ItemsActionButtons from "./CategoryItem/ItemsActionButtons";

export default async function CategoryItems({ id }: { id: string }) {
  const Items = await getAllMenuItems(id);
  return (
    <div className="space-y-4 p-6">
      {Items.length ? (
        Items.map((item) => (
          <div key={item.id} className="rounded-lg border border-slate-200 p-4">
            <div className="flex items-start gap-4">
              <ItemImage url={item.image} name={item.name} />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <ItemDetails
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                  <ItemsActionButtons id={item.id} />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-slate-500">
          No items in this category yet.
        </p>
      )}
    </div>
  );
}

