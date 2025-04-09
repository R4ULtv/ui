"use client";

import ThemeSwitch from "@/components/theme-switch";
import dynamic from "next/dynamic";

const SelectIcon = dynamic(() => import("@/components/icon-picker"), {
  ssr: false,
});

export default function Page() {
  return (
    <main className="flex items-center justify-center h-svh">
      <div className="relative border border-dotted max-w-3xl mx-auto w-full p-4 rounded-xl shadow-md">
        <div className="absolute top-3 right-3">
          <ThemeSwitch />
        </div>
        <div className="flex items-center justify-center h-[480px]">
          <SelectIcon />
        </div>
      </div>
    </main>
  );
}
