"use client";
import { navItems } from "@/data/static";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomBar() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex items-center justify-around">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = `/${item.id}` === pathname;
        return (
          <Link
            href={item.id}
            key={item.id}
            className={`flex-1 flex flex-col items-center justify-center py-5 px-2 transition-all ${
              active
                ? "text-emerald-600 border-t-2 border-emerald-600"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs mt-1 font-medium truncate">
              {item.label === "QR Code" ? "QR" : item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
