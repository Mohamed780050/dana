"use client";

import { useQRCode } from "@/hooks/useQRCodeDate";

export default function QRCodeEditing() {
  const {
    fgColor,
    bgColor,
    size,
    level,
    setFgColor,
    setBgColor,
    setSize,
    setLevel,
  } = useQRCode();
  console.log(level);
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-3 block text-sm font-medium text-slate-700">
          QR Code Color
        </label>
        <div className="flex items-center gap-4">
          <input
            type="color"
            value={fgColor}
            onChange={(e) => setFgColor(e.target.value)}
            className="h-16 w-16 cursor-pointer rounded-lg border-2 border-slate-300"
          />
          <div className="flex-1">
            <input
              type="text"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
              placeholder="#000000"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 font-mono focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            />
            <p className="mt-1 text-xs text-slate-500">
              Foreground color (QR pattern)
            </p>
          </div>
        </div>
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium text-slate-700">
          Background Color
        </label>
        <div className="flex items-center gap-4">
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="h-16 w-16 cursor-pointer rounded-lg border-2 border-slate-300"
          />
          <div className="flex-1">
            <input
              type="text"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              placeholder="#FFFFFF"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 font-mono focus:border-transparent focus:ring-2 focus:ring-emerald-500"
            />
            <p className="mt-1 text-xs text-slate-500">Background color</p>
          </div>
        </div>
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium text-slate-700">
          Size: {size}px
        </label>
        <input
          type="range"
          min="200"
          max="500"
          step="50"
          value={size}
          onChange={(e) => setSize(parseInt(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-emerald-600"
        />
        <div className="mt-1 flex justify-between text-xs text-slate-500">
          <span>200px</span>
          <span>500px</span>
        </div>
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium text-slate-700">
          Error Correction Level
        </label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value as "L" | "M" | "Q" | "H")}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-transparent focus:ring-2 focus:ring-emerald-500"
        >
          <option value="L">Low (7% recovery)</option>
          <option value="M">Medium (15% recovery)</option>
          <option value="Q">Quartile (25% recovery)</option>
          <option value="H">High (30% recovery)</option>
        </select>
        <p className="mt-1 text-xs text-slate-500">
          Higher levels allow the QR code to be read even if damaged
        </p>
      </div>

      <div className="border-t border-slate-200 pt-4">
        <h3 className="mb-3 text-sm font-semibold text-slate-900">
          Quick Presets
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              setBgColor("#FFFFFF");
              setFgColor("#000000");
            }}
            className="rounded-lg border-2 border-slate-300 px-4 py-3 transition-colors hover:border-emerald-500"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="h-6 w-6 rounded bg-black"></div>
              <span className="text-sm font-medium">Classic</span>
            </div>
          </button>
          <button
            onClick={() => {
              setBgColor("#FFFFFF");
              setFgColor("#10b981");
            }}
            className="rounded-lg border-2 border-slate-300 px-4 py-3 transition-colors hover:border-emerald-500"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="h-6 w-6 rounded bg-emerald-500"></div>
              <span className="text-sm font-medium">Emerald</span>
            </div>
          </button>
          <button
            onClick={() => {
              setBgColor("#FFFFFF");
              setFgColor("#3b82f6");
            }}
            className="rounded-lg border-2 border-slate-300 px-4 py-3 transition-colors hover:border-emerald-500"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="h-6 w-6 rounded bg-blue-500"></div>
              <span className="text-sm font-medium">Blue</span>
            </div>
          </button>
          <button
            onClick={() => {
              setBgColor("#000000");
              setFgColor("#FFFFFF");
            }}
            className="rounded-lg border-2 border-slate-300 px-4 py-3 transition-colors hover:border-emerald-500"
          >
            <div className="flex items-center justify-center gap-2">
              <div className="h-6 w-6 rounded border border-slate-300 bg-white"></div>
              <span className="text-sm font-medium">Inverted</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
