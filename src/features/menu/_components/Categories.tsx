import { getAllCategories } from "@/lib/menus";
import { Plus, Trash2 } from "lucide-react";
import CategoryItems from "./CategoryItems";

export default async function Categories() {
  const categories = await getAllCategories();
  return (
    <ul className="space-x-6">
      {categories.map((item) => (
        <li
          key={item.id}
          id={item.id}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">
              {item.name}
            </h3>
            <div className="flex items-center gap-2">
              <button
                // onClick={() => startAddingItem(category.id)}
                className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                <Plus className="h-4 w-4" />
                Add Item
              </button>
              <button
                // onClick={() => deleteCategory(category.id)}
                className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
          <CategoryItems id={item.id} />
        </li>
      ))}
    </ul>
  );
}
