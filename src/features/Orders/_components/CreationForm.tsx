"use client";

import { Input } from "@/components/ui/input";
import { OrderState } from "@/interfaces/interface";
import { DialogClose } from "@radix-ui/react-dialog";
import { useActionState } from "react";
import { createOrder } from "../actions/orderAction";
import { Label } from "@radix-ui/react-label";

export default function CreationForm() {
  const initialState: OrderState = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(
    createOrder,
    initialState,
  );
  return (
    <form
      action={formAction}
      className="max-h-[calc(90vh-180px)] overflow-y-auto"
    >
      <div className="space-y-6 p-1">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Customer Name
            </label>
            <Input
              name="customer_name"
              placeholder="John Doe"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            />
            {state.errors?.customer_name &&
              state.errors.customer_name.map((item, index) => (
                <p className="mt-2 text-sm text-red-500" key={index}>
                  {item}
                </p>
              ))}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Customer Phone
            </label>
            <Input
              name="customer_phone"
              placeholder="+1 (555) 123-4567"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            />
            {state.errors?.customer_phone &&
              state.errors.customer_phone.map((item, index) => (
                <p className="mt-2 text-sm text-red-500" key={index}>
                  {item}
                </p>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Order Status
            </label>
            <select
              defaultValue="Pending"
              name="status"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Payment Status
            </label>
            <select
              name="payment_status"
              defaultValue="unPaid"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            >
              <option value="unPaid">unPaid</option>
              <option value="Paid">Paid</option>
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

        <div>
          <Label className="mb-2 block text-sm font-medium text-slate-700">
            Table number
          </Label>
          <Input
            type="number"
            name="tableNumber"
            placeholder="Table Number"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          />
          {state.errors?.tableNumber &&
              state.errors.tableNumber.map((item, index) => (
                <p className="mt-2 text-sm text-red-500" key={index}>
                  {item}
                </p>
              ))}
        </div>
        <div className="border-t border-slate-200 pt-6">
          <h3 className="mb-4 text-lg font-semibold text-slate-900">
            Order Items
          </h3>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 border-t border-slate-200 p-6">
        <DialogClose>
          <button
            disabled={isPending}
            type="button"
            className="rounded-lg border border-slate-300 px-6 py-2.5 font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            Cancel
          </button>
        </DialogClose>
        <button
          disabled={isPending}
          type="submit"
          className="rounded-lg bg-emerald-600 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Creating..." : "Create Order"}
        </button>
      </div>
    </form>
  );
}
