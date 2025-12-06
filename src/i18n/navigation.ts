// src/i18n/navigation.ts
import { createNavigation } from "next-intl/navigation";

// Inline routing config — no separate routing.ts needed
const routing = {
  locales: ["en", "ar"],
  defaultLocale: "en",
  // optional: other settings like localePrefix, pathnames ...
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
