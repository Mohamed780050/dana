"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CircleLocaleSwitcher({
  className,
}: {
  className?: string;
}) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const otherLocale = locale === "en" ? "ar" : "en";

  return (
    <button
      onClick={() => router.replace(pathname, { locale: otherLocale })}
      className={cn(
        "fixed right-4 bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700",
        className,
      )}
      title={locale === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Languages className="h-6 w-6 text-gray-800 dark:text-gray-200" />
    </button>
  );
}
