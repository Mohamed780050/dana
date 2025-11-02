import { Axios } from "@/lib/Axois";
import { TrendingUp } from "lucide-react";

export default async function SalesOverview() {
  const data = await Axios.get("/status/sales");
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900">Sales Overview</h2>
        <TrendingUp className="w-5 h-5 text-emerald-600" />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-slate-600">Today</span>
          <span className="font-semibold text-slate-900">$234.50</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-600">This Week</span>
          <span className="font-semibold text-slate-900">$1,842.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-600">This Month</span>
          <span className="font-semibold text-slate-900">$7,234.00</span>
        </div>
        <div className="pt-4 border-t border-slate-200">
          <div className="flex justify-between items-center">
            <span className="text-slate-600 font-medium">Total Revenue</span>
            <span className="font-bold text-emerald-600 text-xl">$200</span>
          </div>
        </div>
      </div>
    </div>
  );
}
