import { getSalesStatus } from "@/lib/dashboard";
import { TrendingUp } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function SalesOverview() {
  const sales = await getSalesStatus();
  const t = await getTranslations("Dashboard.SalesOverview");

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{t("title")}</h2>
        <TrendingUp className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-600">{t("Today")}</span>
          <span className="font-semibold text-slate-900">${sales.today}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-600">{t("This Week")}</span>
          <span className="font-semibold text-slate-900">
            ${sales.thisWeek}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-600">{t("This Month")}</span>
          <span className="font-semibold text-slate-900">
            ${sales.thisMonth}
          </span>
        </div>
        <div className="border-t border-slate-200 pt-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-600">
              {t("TotalRevenue")}
            </span>
            <span className="text-xl font-bold text-emerald-600">
              ${sales.today - sales.thisWeek + sales.thisMonth}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
