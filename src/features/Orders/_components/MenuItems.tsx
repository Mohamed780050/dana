"use client";
import { useOrdersStore } from "@/hooks/useCartItem";
import { getAllItems } from "@/lib/menus";
import { useUser } from "@clerk/nextjs";
import { Minus, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function MenuItems() {
  const [loading, setLoading] = useState(true);
  const [menuItems, setMenuItems] = useState<
    {
      id: string;
      userId: string;
      menuId: string;
      name: string;
      price: number;
      description: string;
      image: string | null;
      orgId: string;
    }[]
  >([]);
  const {
    orders,
    addOrder,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeOrder,
  } = useOrdersStore();
  const { user } = useUser();
  useEffect(() => {
    async function getMenuItems() {
      try {
        if (!user?.id) return;
        const items = await getAllItems(user.id);
        setMenuItems(items);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getMenuItems();
  }, []);
  return (
    <div className="border-t border-slate-200 pt-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">Order Items</h3>

      {loading ? (
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
                onClick={() => addOrder(item)}
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

          {orders.length > 0 && (
            <div className="mt-6 space-y-3">
              <h4 className="font-semibold text-slate-900">Selected Items</h4>
              {orders.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg bg-slate-50 p-4"
                >
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-600">
                      ${item.price.toFixed(2)} × {item.quantity} = $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-100"
                    >
                      <Minus className="h-4 w-4 text-slate-600" />
                    </button>
                    <span className="w-12 text-center font-semibold text-slate-900">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-100"
                    >
                      <Plus className="h-4 w-4 text-slate-600" />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeOrder(item.id)}
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
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
