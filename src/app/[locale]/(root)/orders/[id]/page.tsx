import NotFound from "@/features/Orders Details/NotFound";
import { db } from "@/lib/db";
import {
  ArrowLeft,
  Package,
  User,
  Phone,
  Calendar,
  FileText,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const getStatusBadge = (status: string) => {
    const styles = {
      Pending: "bg-amber-100 text-amber-700 border border-amber-300",
      Processing: "bg-blue-100 text-blue-700 border border-blue-300",
      Completed: "bg-emerald-100 text-emerald-700 border border-emerald-300",
      Cancelled: "bg-red-100 text-red-700 border border-red-300",
    };
    return (
      styles[status as keyof typeof styles] ||
      "bg-slate-100 text-slate-700 border border-slate-300"
    );
  };

  const getPaymentBadge = (status: string) => {
    const styles = {
      paid: "bg-emerald-100 text-emerald-700 border border-emerald-300",
      unpaid: "bg-red-100 text-red-700 border border-red-300",
      partial: "bg-amber-100 text-amber-700 border border-amber-300",
    };
    return (
      styles[status as keyof typeof styles] ||
      "bg-slate-100 text-slate-700 border border-slate-300"
    );
  };
  const { id } = await params;
  const order = await db.orders.findUnique({ where: { id } });
  const t = await getTranslations("OrdersDetails");
  return (
    <div className="space-y-">
      {order ? (
        <div className="min-h-screen4 p-4 md:p-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/orders"
              className="mb-6 flex items-center gap-2 font-semibold text-emerald-600 transition-colors hover:text-emerald-700"
            >
              <ArrowLeft className="h-5 w-5" />
              {t("arrow")}
            </Link>
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                <div className="bg-linear-to-r from-emerald-600 to-emerald-500 p-8 text-white">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h1 className="text-4xl font-bold">
                        {t("Order")} #{order.id.slice(0, 8).toUpperCase()}
                      </h1>
                      <p className="mt-2 text-emerald-50">
                        {t("OrderId")} {order.id}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-bold">
                        ${Number(order.total_amount).toFixed(2)}
                      </div>
                      <p className="mt-1 text-emerald-50">{t("TotalAmount")}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-emerald-400/30 pt-6 md:grid-cols-4">
                    <div>
                      <p className="text-sm text-emerald-50">
                        {t("OrderStatus")}
                      </p>
                      <p
                        className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${getStatusBadge(order.status)}`}
                      >
                        {order.status.toUpperCase()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-emerald-50">
                        {t("PaymentStatus")}
                      </p>
                      <p
                        className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${getPaymentBadge(order.payment_status)}`}
                      >
                        {order.payment_status.toUpperCase()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-emerald-50">{t("Date")}</p>
                      <p className="mt-2 font-semibold">
                        {new Date(order.created_at).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          },
                        )}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-emerald-50">{t("Time")}</p>
                      <p className="mt-2 font-semibold">
                        {new Date(order.created_at).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          },
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-4">
                      <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                        <User className="h-5 w-5 text-emerald-600" />
                        {t("CustomerInformation")}
                      </h2>
                      <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <div>
                          <p className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                            {t("Name")}
                          </p>
                          <p className="mt-1 text-lg font-semibold text-slate-900">
                            {order.customer_name || "N/A"}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                            {t("Phone")}
                          </p>
                          <a
                            href={`tel:${order.customer_phone}`}
                            className="mt-1 flex items-center gap-2 font-medium text-emerald-600 hover:text-emerald-700"
                          >
                            <Phone className="h-4 w-4" />
                            {order.customer_phone || "N/A"}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                        <Calendar className="h-5 w-5 text-emerald-600" />
                        {t("OrderDates")}
                      </h2>
                      <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <div>
                          <p className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                            {t("CreatedAt")}
                          </p>
                          <p className="mt-1 text-sm text-slate-900">
                            {new Date(order.created_at).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                            {t("LastUpdated")}
                          </p>
                          <p className="mt-1 text-sm text-slate-900">
                            {new Date(order.updatedAt).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {order.note && (
                    <div className="mb-8">
                      <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900">
                        <FileText className="h-5 w-5 text-emerald-600" />
                        {t("Notes")}
                      </h2>
                      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                        <p className="text-slate-700">{order.note}</p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                      <Package className="h-5 w-5 text-emerald-600" />
                      {t("OrderItems")} ({order.orderItems.length})
                    </h2>

                    {order.orderItems.length === 0 ? (
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-8 text-center">
                        <Package className="mx-auto mb-3 h-12 w-12 text-slate-300" />
                        <p className="text-slate-600">{t("NoItems")}</p>
                      </div>
                    ) : (
                      <div className="overflow-hidden rounded-lg border border-slate-200">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="border-b border-slate-200 bg-slate-100">
                              <tr>
                                <th className="px-6 py-4 text-center text-xs font-semibold tracking-wider text-slate-700 uppercase">
                                  {t("Item")}
                                </th>
                                <th className="px-6 py-4 text-center text-xs font-semibold tracking-wider text-slate-700 uppercase">
                                  {t("Quantity")}
                                </th>
                                <th className="px-6 py-4 text-center text-xs font-semibold tracking-wider text-slate-700 uppercase">
                                  {t("UnitPrice")}
                                </th>
                                <th className="px-6 py-4 text-center text-xs font-semibold tracking-wider text-slate-700 uppercase">
                                  {t("Subtotal")}
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                              {order.orderItems.map((item, index) => (
                                <tr
                                  key={index}
                                  className="transition-colors hover:bg-slate-50"
                                >
                                  <td className="px-6 py-4">
                                    <div>
                                      <p className="font-semibold text-slate-900">
                                        {item.name || "Unknown Item"}
                                      </p>
                                      {item.description && (
                                        <p className="mt-1 text-sm text-slate-600">
                                          {/* {item.menu_item.description} */}
                                        </p>
                                      )}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 text-center font-semibold text-slate-900">
                                    {item.quantity}
                                  </td>
                                  <td className="px-6 py-4 text-center font-semibold text-slate-900">
                                    ${Number(item.price).toFixed(2)}
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    <div className="text-lg font-bold text-emerald-600">
                                      $
                                      {(
                                        Number(item.price) * item.quantity
                                      ).toFixed(2)}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="border-t border-slate-200 bg-slate-50 px-6 py-6">
                          <div className="flex justify-end">
                            <div className="w-full max-w-xs space-y-3">
                              <div className="flex justify-between text-slate-700">
                                <span>{t("Subtotal")}:</span>
                                <span className="font-semibold">
                                  $
                                  {order.orderItems
                                    .reduce(
                                      (sum, item) =>
                                        sum +
                                        Number(item.price) * item.quantity,
                                      0,
                                    )
                                    .toFixed(2)}
                                </span>
                              </div>
                              <div className="flex justify-between border-t border-slate-300 pt-3 text-lg">
                                <span className="font-bold text-slate-900">
                                  {t("Total")}:
                                </span>
                                <span className="text-2xl font-bold text-emerald-600">
                                  ${Number(order.total_amount).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
