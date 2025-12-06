import { QrCode } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("QRCode");
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
      <QrCode className="mx-auto mb-4 h-16 w-16 text-slate-300" />
      <p className="mb-2 text-slate-600">{t("NoRestaurantFound")}</p>
      <p className="text-sm text-slate-500">{t("NotFoundDes")}</p>
    </div>
  );
}
