import { getRequestConfig } from "next-intl/server";

const langs = ["en", "ar"];
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  // optionally validate locale
  if (!locale || !langs.includes(locale)) {
    locale = "en"; // or your default
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
