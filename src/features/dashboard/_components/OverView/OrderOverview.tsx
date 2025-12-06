import { getTotalOrdersStatus } from "@/lib/dashboard";
import { ShoppingBag } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function OrderOverview() {
  const data = await getTotalOrdersStatus();
  const t = await getTranslations("Dashboard.TotalOrders");
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{t("title")}</h2>
        <ShoppingBag className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-600">{t("Pending")}</span>
          <span className="font-semibold text-amber-600">{data.pending}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-600">{t("Processing")}</span>
          <span className="font-semibold text-blue-600">{data.processing}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-600">{t("Completed")}</span>
          <span className="font-semibold text-emerald-600">
            {data.completed}
          </span>
        </div>
        <div className="border-t border-slate-200 pt-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-600">{t("AllOrders")}</span>
            <span className="text-xl font-bold text-slate-900">
              {data.completed + data.pending + data.processing}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
