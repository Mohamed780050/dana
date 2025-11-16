"use client";

import { useOrdersStore } from "@/hooks/useCartItem";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartItems() {
  const {
    orders,
    removeOrder,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useOrdersStore();

  return (
    <>
      <div className="max-h-[350px] flex-1 space-y-4 overflow-y-auto p-6">
        {orders.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-emerald-300"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900">{item.name}</h3>
              <p className="text-sm text-slate-600">
                {/* {currencySymbol} */}
                {Number(item.price).toFixed(2)}
              </p>

              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="rounded p-1 transition-colors hover:bg-slate-200"
                >
                  <Minus className="h-4 w-4 text-slate-600" />
                </button>
                <span className="w-8 text-center font-semibold text-slate-900">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="rounded p-1 transition-colors hover:bg-slate-200"
                >
                  <Plus className="h-4 w-4 text-slate-600" />
                </button>
              </div>
            </div>

            <button
              onClick={() => removeOrder(item.id)}
              className="p-1 text-red-500 transition-colors hover:text-red-700"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 p-6 pt-4 text-lg">
        <span className="font-bold text-slate-900">Total</span>
        <span className="text-xl font-bold text-emerald-600">
          {/* {currencySymbol} */}
          {Number(totalPrice).toFixed(2)}
        </span>
      </div>
    </>
  );
}
