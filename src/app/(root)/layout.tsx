import NavLinks from "@/components/ui/NavLinks";
import { SignOutButton } from "@clerk/nextjs";
import { LogOut, Store } from "lucide-react";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-slate-50">
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Store className="w-8 h-8 text-emerald-600" />
            <h1 className="text-xl font-bold text-slate-800">RestaurantOS</h1>
          </div>
        </div>

        <NavLinks />

        <div className="p-4 border-t border-slate-200">
          {/* <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button> */}
          <SignOutButton>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </SignOutButton>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
