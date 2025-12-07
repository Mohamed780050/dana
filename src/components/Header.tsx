"use client";
import { useAuth } from "@clerk/nextjs";
import { QrCode } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
export default function Header() {
  const auth = useAuth();
  const t = useTranslations("landingPage");
  return (
    <header className="bg-background-light/80 dark:bg-background-dark/80 sticky top-0 z-50 flex items-center justify-between border-b border-solid border-gray-200 px-10 py-4 whitespace-nowrap backdrop-blur-sm dark:border-gray-700">
      <div className="flex items-center gap-4 text-gray-900 dark:text-white">
        <span className="material-symbols-outlined text-primary text-3xl">
          <QrCode />
        </span>
        <h2 className="text-xl leading-tight font-bold tracking-[-0.015em]">
          Dana
        </h2>
      </div>
      {auth.isSignedIn ? (
        <Link
          href="/dashboard"
          className="rounded bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
        >
          {t("Dashboard")}
        </Link>
      ) : (
        <Link
          className="rounded bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
          href="/sign-in"
        >
          {t("CreateAnAccount")}
        </Link>
      )}
    </header>
  );
}
