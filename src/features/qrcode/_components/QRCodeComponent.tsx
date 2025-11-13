import { Palette, QrCode } from "lucide-react";
import QRCodePreview from "./QRCodePreview";
import QRCodeEditing from "./QRCodeEditing";

export default function QRCodeComponent({
  restaurantId,
}: {
  restaurantId: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-xl border border-slate-200 bg-white p-8">
        <div className="mb-6 flex items-center gap-2">
          <QrCode className="h-6 w-6 text-emerald-600" />
          <h2 className="text-xl font-semibold text-slate-900">Your QR Code</h2>
        </div>

        <QRCodePreview restaurantId={restaurantId} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-8">
        <div className="mb-6 flex items-center gap-2">
          <Palette className="h-6 w-6 text-emerald-600" />
          <h2 className="text-xl font-semibold text-slate-900">
            Customize QR Code
          </h2>
        </div>

        <div className="space-y-6">
          <QRCodeEditing />
        </div>
      </div>
    </div>
  );
}
