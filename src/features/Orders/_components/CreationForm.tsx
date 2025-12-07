"use client";

import { Input } from "@/components/ui/input";
import { OrderState } from "@/interfaces/interface";
import { DialogClose } from "@radix-ui/react-dialog";
import { useActionState, useState } from "react";
import { createOrder } from "../actions/orderAction";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import MenuItems from "./MenuItems";
import { useOrdersStore } from "@/hooks/useCartItem";

export default function CreationForm() {
  const initialState: OrderState = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(
    createOrder,
    initialState,
  );
  const { totalPrice } = useOrdersStore();
  const [isDelivery, setIsDelivery] = useState(false);
  const t = useTranslations("Orders.ModalCreation");
  return (
    <form
      action={formAction}
      className="max-h-[calc(90vh-180px)] overflow-y-auto"
    >
      <div className="space-y-6 p-1">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              {t("CustomerName")}
            </label>
            <Input
              disabled={isPending}
              name="customer_name"
              placeholder={t("CustomerName")}
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
              {t("CustomerPhone")}
            </label>
            <Input
              disabled={isPending}
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
              {t("OrderStatus")}
            </label>
            <select
              disabled={isPending}
              defaultValue="Pending"
              name="status"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Pending">{t("Pending")}</option>
              <option value="Processing">{t("Processing")}</option>
              <option value="Completed">{t("Completed")}</option>
              <option value="Cancelled">{t("Cancelled")}</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              {t("PaymentStatus")}
            </label>
            <Select
              defaultValue="unPaid"
              name="payment_status"
              disabled={isPending}
            >
              <SelectTrigger className="w-full px-4 py-2.5">
                <SelectValue placeholder="Select a payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{t("PaymentStatus")}</SelectLabel>
                  <SelectItem value="unPaid">{t("unPaid")}</SelectItem>
                  <SelectItem value="Paid">{t("Paid")}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {t("Note")}
          </label>
          <Textarea
            disabled={isPending}
            placeholder={`${t("Note")}.....`}
            rows={2}
            className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {t("Amount")}
          </label>
          <Input
            disabled={isPending}
            name="total_amount"
            placeholder="$000"
            value={totalPrice}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
          />
          {state.errors?.total_amount &&
            state.errors.total_amount.map((item, index) => (
              <p className="mt-2 text-sm text-red-500" key={index}>
                {item}
              </p>
            ))}
        </div>

        {isDelivery ? (
          <div>
            <Label className="mb-2 block text-sm font-medium text-slate-700">
              {t("Address")}
            </Label>
            <Input
              disabled={isPending}
              type="text"
              name="address"
              placeholder={t("Address")}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            />
            {state.errors?.address &&
              state.errors.address.map((item, index) => (
                <p className="mt-2 text-sm text-red-500" key={index}>
                  {item}
                </p>
              ))}
          </div>
        ) : (
          <div>
            <Label className="mb-2 block text-sm font-medium text-slate-700">
              {t("TableNumber")}
            </Label>
            <Input
              disabled={isPending}
              type="number"
              name="tableNumber"
              placeholder={t("TableNumber")}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            />
            {state.errors?.tableNumber &&
              state.errors.tableNumber.map((item, index) => (
                <p className="mt-2 text-sm text-red-500" key={index}>
                  {item}
                </p>
              ))}
          </div>
        )}
        <Select
          defaultValue="inSite"
          name="location"
          disabled={isPending}
          onValueChange={(e) => {
            if (e === "Delivery") setIsDelivery(true);
            else setIsDelivery(false);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{t("Location")}</SelectLabel>
              <SelectItem value="inSite">{t("inSite")}</SelectItem>
              <SelectItem value="Delivery">{t("delivery")}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <MenuItems />
      </div>

      <div className="flex items-center justify-end gap-3 border-slate-200 p-6">
        <DialogClose>
          <Button disabled={isPending} variant="outline" type="button">
            {t("cancel")}
          </Button>
        </DialogClose>
        <Button
          disabled={isPending}
          type="submit"
          className="rounded-lg bg-emerald-600 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? t("creating") : t("CreateOrder")}
        </Button>
      </div>
    </form>
  );
}
