import { Palette, QrCode } from "lucide-react";
import QRCodePreview from "./QRCodePreview";
import QRCodeEditing from "./QRCodeEditing";
import { useTranslations } from "next-intl";

export default function QRCodeComponent({
  restaurantId,
}: {
  restaurantId: string;
}) {
  const t = useTranslations("QRCode");
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-xl border border-slate-200 bg-white p-8">
        <div className="mb-6 flex items-center gap-2">
          <QrCode className="h-6 w-6 text-emerald-600" />
          <h2 className="text-xl font-semibold text-slate-900">
            {t("YourQRCode")}
          </h2>
        </div>

        <QRCodePreview restaurantId={restaurantId} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-8">
        <div className="mb-6 flex items-center gap-2">
          <Palette className="h-6 w-6 text-emerald-600" />
          <h2 className="text-xl font-semibold text-slate-900">
            {t("CustomizeQRCode")}
          </h2>
        </div>

        <div className="space-y-6">
          <QRCodeEditing />
        </div>
      </div>
    </div>
  );
}
