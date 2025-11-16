"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { CreditCard, ShoppingCart } from "lucide-react";

export default function CartOrderSubmission() {
  const paymentMethod = "cash";
  return (
    <form className="space-y-3 pt-2">
      <div>
        <Label className="mb-2 block text-sm font-medium text-slate-700">
          Your Name
        </Label>
        <Input
          type="text"
          name="name"
          placeholder="John Doe"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <Label className="mb-2 block text-sm font-medium text-slate-700">
          Phone Number
        </Label>
        <Input
          type="tel"
          name="phone"
          placeholder="+1 (555) 123-4567"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Payment Method
        </label>
        <div className="space-y-2">
          <button
            // onClick={() => setPaymentMethod("cash")}
            className={`flex w-full items-center gap-3 rounded-lg border-2 p-3 transition-all ${
              paymentMethod === "cash"
                ? "border-emerald-600 bg-emerald-50"
                : "border-slate-300 hover:border-slate-400"
            }`}
          >
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                paymentMethod === "cash"
                  ? "border-emerald-600 bg-emerald-600"
                  : "border-slate-300"
              }`}
            >
              {paymentMethod === "cash" && (
                <div className="h-2 w-2 rounded-full bg-white" />
              )}
            </div>
            <span
              className={`font-medium ${
                paymentMethod === "cash" ? "text-emerald-600" : "text-slate-700"
              }`}
            >
              Cash on Delivery
            </span>
          </button>

          <button
            // onClick={() => setPaymentMethod("visa")}
            disabled
            className="flex w-full cursor-not-allowed items-center gap-3 rounded-lg border-2 border-slate-300 p-3 opacity-50"
          >
            <div className="h-5 w-5 rounded-full border-2 border-slate-300" />
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-slate-400" />
              <span className="font-medium text-slate-500">
                Visa (Coming Soon)
              </span>
            </div>
          </button>
        </div>
      </div>
      
      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 font-semibold text-white transition-all hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {false ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Processing...
          </>
        ) : (
          <>
            <ShoppingCart className="h-5 w-5" />
            Place Order
          </>
        )}
      </button>
    </form>
  );
}
