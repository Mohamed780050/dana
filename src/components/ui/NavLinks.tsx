"use client";
import { navItems } from "@/data/static";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ModeToggle";

export default function NavLinks() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex-1 p-4 space-y-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = `/${item.id}` === pathname;
        return (
          <Link
            href={item.id}
            key={item.id}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              active
                ? "bg-emerald-50 text-emerald-600 font-medium"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
