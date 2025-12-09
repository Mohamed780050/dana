"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useOrdersStore } from "@/hooks/useCartItem";
import { ShoppingCart } from "lucide-react";
import { ReactNode } from "react";
import CartContent from "./CartContent";
import { useTranslations } from "next-intl";
export default function CartSheets({
  children,
  userId,
}: {
  children: ReactNode;
  userId: string;
}) {
  const { orders } = useOrdersStore();
  const t = useTranslations("RestaurantPublic");
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader className="sticky top-0 border-b border-slate-200 bg-white">
          <SheetTitle className="flex items-center space-x-3 pt-6">
            <ShoppingCart className="h-6 w-6 text-emerald-600" />
            <div className="text-xl font-bold text-slate-900">
              {t("YourCart")}
            </div>
          </SheetTitle>
        </SheetHeader>
        {orders.length ? (
          <CartContent userId={userId} />
        ) : (
          <div className="flex flex-1 items-center justify-center p-6">
            <div className="text-center">
              <ShoppingCart className="mx-auto mb-3 h-12 w-12 text-slate-300" />
              <p className="font-medium text-slate-600">{t("EmptyMessage")}</p>
              <p className="text-sm text-slate-500">{t("EmptyMessageItem")}</p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
