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

/*

<div className="flex items-start gap-4">

                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-semibold text-slate-900">{item.name}</h4>
                                  <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                                  <p className="text-lg font-bold text-emerald-600 mt-2">
                                    ${Number(item.price).toFixed(2)}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => toggleAvailability(item.id, item.is_available)}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                                      item.is_available
                                        ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                                        : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                                    }`}
                                  >
                                    {item.is_available ? 'Available' : 'Unavailable'}
                                  </button>
                                  <button
                                    onClick={() => startEditingItem(item)}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                  >
                                    <Edit2 className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => deleteItem(item.id)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
*/
