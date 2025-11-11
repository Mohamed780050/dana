import { Edit2, Trash2 } from "lucide-react";
import DeleteDialog from "./DeleteDialog";

export default function ItemsActionButtons({ id }: { id: string }) {
  return (
    <div className="flex items-center gap-2">
      <button
        // onClick={() => toggleAvailability(item.id, item.is_available)}
        className="rounded-lg px-3 py-1.5 text-xs font-medium transition-colors"
        // className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
        //   item.is_available
        //     ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
        //     : "bg-slate-200 text-slate-600 hover:bg-slate-300"
        // } `}
      >
        {/* {item.is_available ? "Available" : "Unavailable"} */}
      </button>
      <button
        // onClick={() => startEditingItem(item)}
        className="rounded-lg p-2 text-blue-600 transition-colors hover:bg-blue-50"
      >
        <Edit2 className="h-4 w-4" />
      </button>
      <DeleteDialog itemId={id}>
        <button
          // onClick={() => deleteItem(item.id)}
          className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </DeleteDialog>
    </div>
  );
}
