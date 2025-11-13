"use client";
import { DetailsState } from "@/interfaces/interface";
import { Save } from "lucide-react";
import { EditRestaurantDetails } from "../action/restaurant";
import { useActionState } from "react";

export default function RestaurantForm() {
  const initialState: DetailsState = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(
    EditRestaurantDetails,
    initialState,
  );
  return (
    <form className="space-y-6" action={formAction}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Restaurant Name
          </label>
          <input
            disabled={isPending}
            name="name"
            type="text"
            placeholder="My Amazing Restaurant"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          />
          {state.errors?.name &&
            state.errors.name.map((text, index) => (
              <p key={index} className="mt-2 text-sm text-red-500">
                {text}
              </p>
            ))}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Restaurant Phone
          </label>
          <input
            disabled={isPending}
            name="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          />
          {state.errors?.phone &&
            state.errors.phone.map((text, index) => (
              <p key={index} className="mt-2 text-sm text-red-500">
                {text}
              </p>
            ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Restaurant Description
        </label>
        <textarea
          disabled={isPending}
          name="description"
          placeholder="Tell customers about your restaurant..."
          rows={4}
          className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
        />
        {state.errors?.description &&
          state.errors.description.map((text, index) => (
            <p key={index} className="mt-2 text-sm text-red-500">
              {text}
            </p>
          ))}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Restaurant Address
        </label>
        <input
          name="address"
          disabled={isPending}
          type="text"
          placeholder="123 Main Street, City, State 12345"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
        />

        {state.errors?.address &&
          state.errors.address.map((text, index) => (
            <p key={index} className="mt-2 text-sm text-red-500">
              {text}
            </p>
          ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Currency
          </label>
          <select
            name="currency"
            disabled={isPending}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
          </select>
          {state.errors?.currency &&
            state.errors.currency.map((text, index) => (
              <p key={index} className="mt-2 text-sm text-red-500">
                {text}
              </p>
            ))}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            WhatsApp Phone
          </label>
          <input
            name="wa_phone"
            disabled={isPending}
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          />
          {state.errors?.wa_phone &&
            state.errors.wa_phone.map((text, index) => (
              <p key={index} className="mt-2 text-sm text-red-500">
                {text}
              </p>
            ))}
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Save className="h-5 w-5" />
          {isPending ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
