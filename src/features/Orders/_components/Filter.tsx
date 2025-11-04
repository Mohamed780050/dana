import { Plus, Filter as FilterIcon } from "lucide-react";
import CreateOrderModal from "./CreateOrderModal";

export default function Filter() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FilterIcon className="w-5 h-5 text-slate-600" />
          <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
        </div>
        <CreateOrderModal>
          <button
            // onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition-colors cursor-pointer"
          >
            <Plus className="w-5 h-5" />
            Create Order
          </button>
        </CreateOrderModal>
      </div>
    </div>
  );
}
