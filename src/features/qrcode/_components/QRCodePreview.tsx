"use client";
import { useQRCode } from "@/hooks/useQRCodeDate";
import { Download } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function QRCodePreview() {
  const { fgColor, bgColor, size, level, menuURL } = useQRCode();
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <div
          //   ref={qrRef}
          className="rounded-2xl p-8 shadow-lg transition-all"
          //   style={{ backgroundColor: qrCustomization.bgColor }}
        >
          <QRCodeSVG
            value={"https://www.google.com"}
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
          {menuURL}
        </p>
      </div>
    </div>
  );
}
