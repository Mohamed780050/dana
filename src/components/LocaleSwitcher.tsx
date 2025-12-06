"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Button } from "./ui/button";
import { Languages } from "lucide-react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const otherLocale = locale === "en" ? "ar" : "en";

  return (
    <Button
      variant="ghost"
      className="w-full cursor-pointer justify-start"
      onClick={() => router.replace(pathname, { locale: otherLocale })}
    >
      <Languages />
      {locale === "en" ? "العربية" : "English"}
    </Button>
  );
}
