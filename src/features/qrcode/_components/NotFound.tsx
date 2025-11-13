import { QrCode } from "lucide-react";

export default function NotFound() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
      <QrCode className="mx-auto mb-4 h-16 w-16 text-slate-300" />
      <p className="mb-2 text-slate-600">No restaurant found</p>
      <p className="text-sm text-slate-500">
        Please set up your restaurant information first.
      </p>
    </div>
  );
}
