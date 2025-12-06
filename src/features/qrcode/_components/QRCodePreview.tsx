"use client";
import { useQRCode } from "@/hooks/useQRCodeDate";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";

export default function QRCodePreview({
  restaurantId,
}: {
  restaurantId: string;
}) {
  const { fgColor, bgColor, size, level } = useQRCode();
  const qrRef = useRef<HTMLDivElement>(null);
  const downloadQRCode = () => {
    if (!qrRef.current) return;

    const svg = qrRef.current.querySelector("svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    canvas.width = size;
    canvas.height = size;

    img.onload = () => {
      ctx?.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "restaurant-qr-code.png";
          document.body.appendChild(a);
          a.click();
          URL.revokeObjectURL(url);
          document.body.removeChild(a);
        }
      });
    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgData)));
  };
  const t = useTranslations("QRCode");
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <div className="rounded-2xl p-8 shadow-lg transition-all" ref={qrRef}>
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
        onClick={downloadQRCode}
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
      >
        <Download className="h-5 w-5" />
        {t("DownloadQRCode")}
      </button>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
        <p className="mb-2 text-sm font-medium text-blue-900">
          {t("QRCodeLink")}
        </p>
        <p className="rounded border border-blue-100 bg-white px-3 py-2 font-mono text-xs break-all text-blue-800">
          {process.env.NEXT_PUBLIC_BASE_URL}/restaurantMenu/{restaurantId}
        </p>
      </div>
    </div>
  );
}
