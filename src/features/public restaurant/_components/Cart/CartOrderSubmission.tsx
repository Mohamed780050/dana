"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { CreditCard, ShoppingCart } from "lucide-react";
import { useActionState, useState } from "react";
import { saveOrder } from "../../action/cart";
import { useOrdersStore } from "@/hooks/useCartItem";
import { CartState } from "@/interfaces/interface";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

export default function CartOrderSubmission({ userId }: { userId: string }) {
  const initialState: CartState = { message: null, errors: {} };
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "Visa">("cash");
  const { orders, totalPrice } = useOrdersStore();
  const saveOrderWithData = saveOrder.bind(
    null,
    orders,
    totalPrice,
    paymentMethod,
    userId,
  );
  const [state, action, isPending] = useActionState<CartState, FormData>(
    saveOrderWithData,
    initialState,
  );
  const [isDeleviray, setIsDeleviray] = useState(false);
  return (
    <form className="space-y-3 pt-2" action={action}>
      <div>
        <Label className="mb-2 block text-sm font-medium text-slate-700">
          Your Name
        </Label>
        <Input
          type="text"
          name="category_name"
          placeholder="John Doe"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-emerald-500"
        />
        {state.errors?.customer_name &&
          state.errors.customer_name.map((text, index) => (
            <p className="text-red-500" key={index}>
              {text}
            </p>
          ))}
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
        {state.errors?.customer_phone &&
          state.errors.customer_phone.map((text, index) => (
            <p className="text-red-500" key={index}>
              {text}
            </p>
          ))}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Payment Method
        </label>
        <div className="space-y-2">
          <button
            type="button"
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
            type="button"
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

      {isDeleviray === false ? (
        <div>
          <Label className="mb-2 block text-sm font-medium text-slate-700">
            Table number
          </Label>
          <Input
            disabled={isPending}
            type="number"
            name="tableNumber"
            placeholder="Table Number"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      ) : (
        <div></div>
      )}

      <Select
        defaultValue="inSite"
        name="location"
        disabled={isPending}
        onValueChange={(e) => {
          if (e === "delivery") setIsDeleviray(true);
          else setIsDeleviray(false);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Location</SelectLabel>
            <SelectItem value="inSite" onClick={() => setIsDeleviray(true)}>
              In Site
            </SelectItem>
            <SelectItem value="delivery" onClick={() => setIsDeleviray(true)}>
              Delivery
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <button
        type="submit"
        disabled={isPending}
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 font-semibold text-white transition-all hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? (
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
