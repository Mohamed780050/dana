"use client";

import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";

export default function CreationForm() {
  return (
    <form
      // onSubmit={handleSubmit}
      className="max-h-[calc(90vh-180px)] overflow-y-auto"
    >
      <div className="space-y-6 p-1">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Customer Name
            </label>
            <Input
              // type="text"
              // value={formData.customerName}
              // onChange={(e) =>
              //   setFormData({ ...formData, customerName: e.target.value })
              // }
              placeholder="John Doe"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Customer Phone
            </label>
            <Input
              // type="tel"
              // value={formData.customerPhone}
              // onChange={(e) =>
              //   setFormData({ ...formData, customerPhone: e.target.value })
              // }
              placeholder="+1 (555) 123-4567"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Order Status
            </label>
            <select
              // value={formData.status}
              // onChange={(e) =>
              //   setFormData({ ...formData, status: e.target.value })
              // }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            >
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Payment Status
            </label>
            <select
              // value={formData.paymentStatus}
              // onChange={(e) =>
              //   setFormData({ ...formData, paymentStatus: e.target.value })
              // }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            >
              <option value="unpaid">Unpaid</option>
              <option value="paid">Paid</option>
              <option value="partial">Partial</option>
            </select>
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Notes
          </label>
          <textarea
            // value={formData.notes}
            // onChange={(e) =>
            //   setFormData({ ...formData, notes: e.target.value })
            // }
            placeholder="Special instructions..."
            rows={2}
            className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="border-t border-slate-200 pt-6">
          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Order Items
          </h3>

          {/* {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-emerald-600"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid max-h-64 grid-cols-1 gap-3 overflow-y-auto p-1 md:grid-cols-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => addItem(item)}
                    className="flex items-center justify-between rounded-lg border border-slate-200 p-3 text-left transition-all hover:border-emerald-500 hover:bg-emerald-50"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500">
                        ${Number(item.price).toFixed(2)}
                      </p>
                    </div>
                    <Plus className="h-5 w-5 text-emerald-600" />
                  </button>
                ))}
              </div>

              {orderItems.length > 0 && (
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold text-slate-900">
                    Selected Items
                  </h4>
                  {orderItems.map((item) => (
                    <div
                      key={item.menuItemId}
                      className="flex items-center justify-between rounded-lg bg-slate-50 p-4"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-slate-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-slate-600">
                          ${item.price.toFixed(2)} × {item.quantity} = $
                          {(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.menuItemId, -1)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-100"
                        >
                          <Minus className="h-4 w-4 text-slate-600" />
                        </button>
                        <span className="w-12 text-center font-semibold text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.menuItemId, 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-100"
                        >
                          <Plus className="h-4 w-4 text-slate-600" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.menuItemId)}
                          className="ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="flex items-center justify-between rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                    <span className="text-lg font-semibold text-slate-900">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-emerald-600">
                      ${calculateTotal().toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )} */}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 border-t border-slate-200 p-6">
        <DialogClose>
          <button
            type="button"
            // onClick={onClose}
            className="rounded-lg border border-slate-300 px-6 py-2.5 font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            Cancel
          </button>
        </DialogClose>
        <button
          type="submit"
          // disabled={saving || orderItems.length === 0}
          className="rounded-lg bg-emerald-600 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {/* {saving ? "Creating..." : "Create Order"} */}Create Order
        </button>
      </div>
    </form>
  );
}
