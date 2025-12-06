"use client";
import { DetailsState } from "@/interfaces/interface";
import { Save } from "lucide-react";
import { EditRestaurantDetails } from "../action/restaurant";
import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function RestaurantForm({
  address,
  currency,
  name,
  description,
  phone,
  wa_phone,
}: {
  phone: string;
  name: string;
  description: string;
  address: string;
  currency: "USD" | "EUR" | "GBP" | "EGP";
  wa_phone: string;
}) {
  const initialState: DetailsState = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(
    EditRestaurantDetails,
    initialState,
  );
  const t = useTranslations("RestaurantSettings");
  return (
    <form className="space-y-6" action={formAction}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {t("RestaurantName")}
          </label>
          <Input
            defaultValue={name || ""}
            disabled={isPending}
            name="name"
            type="text"
            placeholder={t("RestaurantNamePlaceholder")}
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
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
            {t("RestaurantPhone")}
          </label>
          <Input
            defaultValue={parseInt(phone) || undefined}
            disabled={isPending}
            name="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
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
          {t("RestaurantDescription")}
        </label>
        <Textarea
          defaultValue={description}
          disabled={isPending}
          name="description"
          placeholder={t("RestaurantDescriptionPlaceholder")}
          rows={4}
          className="min-h-44 w-full resize-none rounded-lg border border-slate-300 px-4 py-3"
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
          {t("RestaurantAddress")}
        </label>
        <Input
          defaultValue={address}
          name="address"
          disabled={isPending}
          type="text"
          placeholder={t("RestaurantAddressPlaceholder")}
          className="w-full rounded-lg border border-slate-300 px-4 py-3"
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
            {t("Currency")}
          </label>
          <select
            defaultValue={currency}
            name="currency"
            disabled={isPending}
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="EGP">EGP - Egypt Pound</option>
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
            {t("WhatsAppPhone")}
          </label>
          <Input
            defaultValue={wa_phone}
            name="wa_phone"
            disabled={isPending}
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="w-full rounded-lg border border-slate-300 px-4 py-3"
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
          {isPending ? t("Saving") : t("SaveChanges")}
        </button>
      </div>
    </form>
  );
}
