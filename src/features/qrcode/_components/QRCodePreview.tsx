"use client";
import { useQRCode } from "@/hooks/useQRCodeDate";
import { Download } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function QRCodePreview({
  restaurantId,
}: {
  restaurantId: string;
}) {
  const { fgColor, bgColor, size, level } = useQRCode();
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <div className="rounded-2xl p-8 shadow-lg transition-all">
          <QRCodeSVG
            value={`${process.env.NEXT_PUBLIC_BASE_URL}/restaurantMenu/${restaurantId}`}
            size={size}
            level={level}
            boostLevel={false}
            fgColor={fgColor}
            bgColor={bgColor}
          />
        </div>
      </div>

      <button
        // onClick={downloadQRCode}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
      >
        <Download className="h-5 w-5" />
        Download QR Code
      </button>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
        <p className="mb-2 text-sm font-medium text-blue-900">QR Code Link:</p>
        <p className="rounded border border-blue-100 bg-white px-3 py-2 font-mono text-xs break-all text-blue-800">
          {process.env.NEXT_PUBLIC_BASE_URL}/restaurantMenu/{restaurantId}
        </p>
      </div>
    </div>
  );
}
