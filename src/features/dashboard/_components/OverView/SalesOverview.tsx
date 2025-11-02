/* eslint-disable @typescript-eslint/no-explicit-any */
import { Axios } from "@/lib/Axois";
import { getSalesStatus } from "@/lib/sales";
import axios from "axios";
import { TrendingUp } from "lucide-react";

export default async function SalesOverview() {
  const sales = await getSalesStatus();
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-slate-900">Sales Overview</h2>
        <TrendingUp className="w-5 h-5 text-emerald-600" />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-slate-600">Today</span>
          <span className="font-semibold text-slate-900">${sales.today}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-600">This Week</span>
          <span className="font-semibold text-slate-900">
            ${sales.thisWeek}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-600">This Month</span>
          <span className="font-semibold text-slate-900">
            ${sales.thisMonth}
          </span>
        </div>
        <div className="pt-4 border-t border-slate-200">
          <div className="flex justify-between items-center">
            <span className="text-slate-600 font-medium">Total Revenue</span>
            <span className="font-bold text-emerald-600 text-xl">
              ${sales.today + sales.thisWeek + sales.thisMonth}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
