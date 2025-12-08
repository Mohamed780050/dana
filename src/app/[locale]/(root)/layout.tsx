import CircleLocaleSwitcher from "@/components/CircleLocaleSwitcher";
import Aside from "@/features/_root/Aside";
import BottomBar from "@/features/_root/BottomBar";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-slate-50 pb-20 md:pb-0">
      <Aside />
      <BottomBar />
      <div className="block md:hidden">
        <CircleLocaleSwitcher className="bottom-24" />
      </div>
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
