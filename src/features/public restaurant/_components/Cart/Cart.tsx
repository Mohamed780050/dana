"use client";
import { ShoppingCart } from "lucide-react";
import CartSheets from "./CartSheets";
import { useOrdersStore } from "@/hooks/useCartItem";

export default function Cart() {
  const { orders } = useOrdersStore();
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="ml-4 text-2xl font-bold text-slate-900">Menu</h2>
      <CartSheets>
        <button className="relative flex transform items-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-emerald-700 hover:shadow-xl">
          <ShoppingCart className="h-5 w-5" />
          Cart
          {orders.length > 0 && (
            <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {orders.length}
            </span>
          )}
        </button>
      </CartSheets>
    </div>
  );
}
