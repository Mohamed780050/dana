import { Currency } from "@/generated/prisma/enums";
import AddToCart from "./AddToCart";

export default function ItemInfo({
  name,
  currency,
  price,
  description,
}: {
  name: string;
  price: number;
  currency: Currency;
  description: string;
}) {
  return (
    <div className="space-y-3 p-5">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-xl leading-tight font-bold text-slate-900">
          {name}
        </h3>
        <div className="rounded-lg bg-emerald-100 px-3 py-1 text-lg font-bold whitespace-nowrap text-emerald-700">
          {currency === "USD" && "$"}
          {currency === "EUR" && "€"}
          {currency === "GBP" && "£"}
          {!["USD", "EUR", "GBP"].includes(currency) && currency + " "}
          {Number(price).toFixed(2)}
        </div>
      </div>
      <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
      <div className="border-t border-slate-200 pt-2">
        <AddToCart />
      </div>
    </div>
  );
}
