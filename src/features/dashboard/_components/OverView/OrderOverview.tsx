import { getTotalOrdersStatus } from "@/lib/dashboard";
import { ShoppingBag } from "lucide-react";

export default async function OrderOverview() {
  const data = await getTotalOrdersStatus();
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900">Total Orders</h2>
        <ShoppingBag className="w-5 h-5 text-emerald-600" />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-slate-600">Pending</span>
          <span className="font-semibold text-amber-600">{data.pending}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-600">Processing</span>
          <span className="font-semibold text-blue-600">{data.processing}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-600">Completed</span>
          <span className="font-semibold text-emerald-600">
            {data.completed}
          </span>
        </div>
        <div className="pt-4 border-t border-slate-200">
          <div className="flex justify-between items-center">
            <span className="text-slate-600 font-medium">All Orders</span>
            <span className="font-bold text-slate-900 text-xl">
              {data.completed + data.pending + data.processing}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
