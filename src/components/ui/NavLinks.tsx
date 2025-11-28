"use client";
import { navItems } from "@/data/static";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({
  orgRole,
}: {
  orgRole: string | null | undefined;
}) {
  const pathname = usePathname();
  // const { orgRole } = await auth();
  // if (orgRole === "org:delivery" || orgRole === "org:cashier") return null;
  return (
    <>
      {orgRole === "org:delivery" || orgRole === "org:cashier" ? (
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = `/${item.id}` === pathname;
            if (item.id === "orders")
              return (
                <Link
                  href={item.id}
                  key={item.id}
                  className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                    active
                      ? "bg-emerald-50 font-medium text-emerald-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
          })}
        </nav>
      ) : (
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = `/${item.id}` === pathname;
            return (
              <Link
                href={item.id}
                key={item.id}
                className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                  active
                    ? "bg-emerald-50 font-medium text-emerald-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
}
