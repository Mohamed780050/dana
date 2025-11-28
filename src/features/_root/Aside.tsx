import { Button } from "@/components/ui/button";
import NavLinks from "@/components/ui/NavLinks";
import { SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogOut, Store } from "lucide-react";

export default async function Aside() {
    const { orgRole } = await auth();

  return (
    <aside className="w-64 bg-white border-r border-slate-200 md:flex flex-col hidden">
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Store className="w-8 h-8 text-emerald-600" />
          <h1 className="text-xl font-bold text-slate-800">RestaurantOS</h1>
        </div>
      </div>

      <NavLinks orgRole={orgRole} />

      <div className="p-4 border-t border-slate-200">
        <SignOutButton>
          <Button
            variant="ghost"
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all justify-start cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Button>
        </SignOutButton>
      </div>
    </aside>
  );
}
