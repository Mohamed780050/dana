import { StatCardProps } from "@/interfaces/interface";

export default function StatCard({ title, value, icon: Icon, trend, trendUp }: StatCardProps) {
  return (
    <li className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-slate-900 mb-2">{value}</p>
          {trend && (
            <p className={`text-sm font-medium ${trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
              {trend}
            </p>
          )}
        </div>
        <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
      </div>
    </li>
  );
}
