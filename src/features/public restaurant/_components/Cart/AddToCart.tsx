"use client";
import { useOrdersStore } from "@/hooks/useCartItem";
import { Currency } from "@prisma/client";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AddToCart({
  name,
  currency,
  price,
  description,
  itemId,
}: {
  name: string;
  price: number;
  currency: Currency;
  description: string;
  itemId: string;
}) {
  const { addOrder } = useOrdersStore();
  const t = useTranslations("RestaurantPublic")
  return (
    <button
      onClick={() => addOrder({ id: itemId, name: name, price })}
      className="group mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2 font-semibold text-white transition-all hover:bg-emerald-700"
    >
      <ShoppingCart className="h-4 w-4 transition-transform group-hover:scale-110" />
      {t("AddToCart")}
    </button>
  );
}
