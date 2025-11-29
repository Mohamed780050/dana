import { OrderInterface } from "@/interfaces/interface";
import { Search } from "lucide-react";
import Paid from "./Paid";
import Delivered from "./Delivered";
import { auth } from "@clerk/nextjs/server";

export default async function OrderTableComponent({
  filteredOrders,
}: {
  filteredOrders: OrderInterface[];
}) {
  const { orgRole } = await auth();
  return (
    <table className="w-full">
      <thead className="border-b border-slate-200 bg-slate-50 text-nowrap">
        <tr>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            Order ID
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            Customer
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            Phone
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            Amount
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            Status
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            Payment
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            Table Number
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            Location
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            Date
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-600 uppercase">
            Action
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
                #{order.id.slice(0, 8)}
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
                  className={`{getStatusBadge(order.status)} inline-flex rounded-full px-3 py-1 text-xs font-medium`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${order.payment_status === "unPaid" ? "bg-red-200" : "bg-emerald-200"}`}
                >
                  {order.payment_status}
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
