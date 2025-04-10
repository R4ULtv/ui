"use client";

import CopyUrl from "@/components/copy-url";
import ThemeSwitch from "@/components/theme-switch";
import dynamic from "next/dynamic";

const IconPicker = dynamic(() => import("@/registry/icon-picker/icon-picker"), {
  ssr: false,
});

const IconPickerVirtualized = dynamic(
  () => import("@/registry/icon-picker/icon-picker-virtualized"),
  {
    ssr: false,
  },
);

export default function Page() {
  return (
    <main className="flex items-center justify-center flex-col gap-20 min-h-svh my-12">
      <div className="max-w-3xl mx-auto w-full">
        <div className="space-y-1 mb-2 ml-2">
          <h1 className="font-semibold">Icon Picker</h1>
          <CopyUrl url="https://ui.raulcarini.dev/r/icon-picker.json" />
        </div>
        <div className="relative border border-dotted w-full p-4 rounded-xl shadow-md">
          <div className="absolute top-3 right-3">
            <ThemeSwitch />
          </div>
          <div className="flex items-center justify-center h-[480px]">
            <IconPicker />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <div className="space-y-1 mb-2 ml-2">
          <h1 className="font-semibold">Icon Picker with Virtualized Grid</h1>
          <CopyUrl url="https://ui.raulcarini.dev/r/icon-picker-virtualized.json" />
        </div>

        <div className="relative border border-dotted w-full p-4 rounded-xl shadow-md">
          <div className="absolute top-3 right-3">
            <ThemeSwitch />
          </div>
          <div className="flex items-center justify-center h-[480px]">
            <IconPickerVirtualized />
          </div>
        </div>
      </div>
    </main>
  );
}
