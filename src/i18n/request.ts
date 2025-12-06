// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";

export const langs = ["en", "ar"];

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale ?? "en";
  return {
    locale: currentLocale,
    messages: (await import(`./messages/${currentLocale}.json`)).default,
  };
});
