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
export default function CartSheets({ children }: { children: ReactNode }) {
  const { orders } = useOrdersStore();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="sticky top-0 border-b border-slate-200 bg-white">
          <SheetTitle className="flex items-center space-x-3 pt-6">
            <ShoppingCart className="h-6 w-6 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900">Your Cart</h2>
          </SheetTitle>
        </SheetHeader>
        {orders.length ? (
          <CartContent />
        ) : (
          <div className="flex flex-1 items-center justify-center p-6">
            <div className="text-center">
              <ShoppingCart className="mx-auto mb-3 h-12 w-12 text-slate-300" />
              <p className="font-medium text-slate-600">Your cart is empty</p>
              <p className="text-sm text-slate-500">Add items to get started</p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
