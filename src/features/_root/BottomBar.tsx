"use client";
import { navItems } from "@/data/static";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomBar() {
  const pathname = usePathname();
  const t = useTranslations("NavLinks");
  const local = useLocale();

  return (
    <nav className="fixed right-0 bottom-0 left-0 flex items-center justify-around border-t border-slate-200 bg-white md:hidden">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = `/${local}/${item.id}` === pathname;
        return (
          <Link
            href={`/${item.id}`}
            key={item.id}
            className={`flex flex-1 flex-col items-center justify-center border-t-0 px-2 py-5 transition-all duration-200 ease-out ${
              active
                ? "border-t-2 border-emerald-600 bg-emerald-50 text-emerald-600"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="mt-1 truncate text-xs font-medium">
              <span>{t(item.label)}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
