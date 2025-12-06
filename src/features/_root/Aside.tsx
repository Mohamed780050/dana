import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Button } from "@/components/ui/button";
import NavLinks from "@/components/ui/NavLinks";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogOut, Store } from "lucide-react";
import { getLocale } from "next-intl/server";

export default async function Aside() {
  const { orgRole } = await auth();
  const local = await getLocale();
  return (
    <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white md:flex">
      <div className="flex gap-2 border-b border-slate-200 p-6">
        <div className="flex items-center gap-2">
          <Store className="h-8 w-8 text-emerald-600" />
          <h1 className="text-xl font-bold text-slate-800">RestaurantOS</h1>
        </div>
        <UserButton />
      </div>

      <NavLinks orgRole={orgRole} />

      <div className="border-t border-slate-200 p-4">
        <SignOutButton>
          <Button
            variant="ghost"
            className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg px-4 py-3 text-slate-600 transition-all hover:bg-red-50 hover:text-red-600"
          >
            <LogOut className="h-5 w-5" />
            <span>{local === "ar" ? "تسجيل الخروج" : "Logout"}</span>
          </Button>
        </SignOutButton>
        <LocaleSwitcher />
      </div>
    </aside>
  );
}
