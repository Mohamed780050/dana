import { OrderInterface } from "@/interfaces/interface";
import { Search } from "lucide-react";
import Paid from "./Paid";
import Delivered from "./Delivered";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function OrderTableComponent({
  filteredOrders,
}: {
  filteredOrders: OrderInterface[];
}) {
  const { orgRole } = await auth();
  const t = await getTranslations("Orders.Table");

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-amber-100 text-amber-700",
      processing: "bg-blue-100 text-blue-700",
      completed: "bg-emerald-100 text-emerald-700",
      cancelled: "bg-red-100 text-red-700",
    };
    return (
      styles[status as keyof typeof styles] || "bg-slate-100 text-slate-700"
    );
  };
  return (
    <table className="w-full">
      <thead className="border-b border-slate-200 bg-slate-50 text-nowrap">
        <tr>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            {t("OrderId")}
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            {t("Customers")}
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            {t("Phone")}
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            {t("Amount")}
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            {t("Status")}
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            {t("Payment")}
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            {t("TableNumber")}
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            {t("Location")}
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            {t("Date")}
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            {t("Action")}
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-200">
        {filteredOrders.length === 0 ? (
          <tr>
            <td colSpan={8} className="px-6 py-12 text-center">
              <Search className="mx-auto mb-3 h-12 w-12 text-slate-300" />
              <p className="text-slate-600">No orders found</p>
              <p className="mt-1 text-sm text-slate-500">
                Try adjusting your filters
              </p>
            </td>
          </tr>
        ) : (
          filteredOrders.map((order) => (
            <tr key={order.id} className="transition-colors hover:bg-slate-50">
              <td className="px-6 py-4 text-sm font-medium text-slate-900">
                <Link href={`orders/${order.id}`}>#{order.id.slice(0, 8)}</Link>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">
                {order.customer_name || "Guest"}
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">
                {order.customer_phone || "-"}
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                ${Number(order.total_amount).toFixed(2)}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`${getStatusBadge(order.status.toLocaleLowerCase())} inline-flex rounded-full px-3 py-1 text-xs font-medium`}
                >
                  {t(order.status)}
                </span>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${order.payment_status === "unPaid" ? "bg-red-200" : "bg-emerald-200"}`}
                >
                  {t(order.payment_status)}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">
                {order.tableNumber}
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">
                {order.location}
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">
                {new Date(order.created_at).toLocaleDateString()}
              </td>
              <td className="flex gap-2 px-6 py-4 text-sm text-slate-600">
                {orgRole === "org:cashier" && <Paid id={order.id} />}
                {orgRole === "org:delivery" && <Delivered id={order.id} />}
                {orgRole === "org:admin" && (
                  <>
                    <Delivered id={order.id} />
                    <Paid id={order.id} />
                  </>
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
