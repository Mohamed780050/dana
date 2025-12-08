import { FileText } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="text-center">
          <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Order Not Found</h1>
          <p className="text-slate-600">The order you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
  );
};
