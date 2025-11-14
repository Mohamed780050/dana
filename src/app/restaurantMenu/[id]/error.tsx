// app/dashboard/error.tsx
"use client";

import { Utensils } from "lucide-react";
import React, { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: Props) {
  useEffect(() => {
    // Log to an error-tracking service
    console.error("Route segment error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="text-center">
        <Utensils className="mx-auto mb-4 h-16 w-16 text-slate-300" />
        <h1 className="mb-2 text-2xl font-bold text-slate-900">
          Restaurant Not Found
        </h1>
        <p className="text-slate-600">
          The restaurant you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}
