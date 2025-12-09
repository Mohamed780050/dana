import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingBag } from "lucide-react";
import { ReactNode } from "react";
import CreationForm from "./CreationForm";
import { useLocale, useTranslations } from "next-intl";

export default function CreateOrderModal({
  children,
}: {
  children: ReactNode;
}) {
  const t = useTranslations("Orders.ModalCreation");
  const local = useLocale();
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-h-[90vh] sm:max-w-[701px]">
          <DialogHeader>
            <DialogTitle>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                  <ShoppingBag className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">
                  {t("title")}
                </div>
              </div>
            </DialogTitle>
            <DialogDescription className={`${local === "ar" && "text-right"}`}>
              {t("description")}
            </DialogDescription>
            <div className="w-full border-b border-slate-200"></div>
          </DialogHeader>
          <CreationForm />
        </DialogContent>
      </form>
    </Dialog>
  );
}
