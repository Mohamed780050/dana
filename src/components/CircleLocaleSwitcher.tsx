"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Languages } from "lucide-react";

export default function CircleLocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const otherLocale = locale === "en" ? "ar" : "en";

  return (
    <button
      onClick={() => router.replace(pathname, { locale: otherLocale })}
      className="fixed bottom-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      title={locale === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Languages className="w-6 h-6 text-gray-800 dark:text-gray-200" />
    </button>
  );
}
