import type { Metadata } from "next";
import OpenV0 from "@/components/open-v0";
import { Separator } from "@/components/ui/separator";

import CopyShadcn from "@/components/copy-shadcn";
import CopyURL from "@/components/copy-url";

import {
  IconPickerExample,
  IconPickerExampleMultiple,
  IconPickerExampleCustomColor,
  IconPickerExampleVirtua,
  IconPickerExampleTanstack,
  IconPickerExampleVirtualized,
  IconPickerExamplePopover,
} from "@/components/examples/icon-picker";

export const metadata: Metadata = {
  title: "Icon Picker Components",
  description:
    "A collection of different icon picker components. Using React, TypeScript, and Tailwind CSS. Install the components using the shadcn/cli or open it in v0.",
  openGraph: {
    url: "/icon-picker",
    siteName: "Icon Picker Components",
    images: [
      {
        url: "/icon-picker/og-image.png",
        width: 1200,
        height: 630,
        alt: "Icon Picker Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const components = [
  {
    name: "Icon Picker",
    description: "A simple icon picker component with search functionality.",
    registry: "https://ui.raulcarini.dev/r/icon-picker.json",
    r: "@ui/icon-picker",
    component: IconPickerExample,
  },
  {
    name: "Icon Picker Multiple",
    description:
      "Allows selection of multiple icons for building icon collections.",
    registry: "https://ui.raulcarini.dev/r/icon-picker-multiple.json",
    r: "@ui/icon-picker-multiple",
    component: IconPickerExampleMultiple,
  },
  {
    name: "Icon Picker Custom Color",
    description: "Enables icon selection with color customization.",
    registry: "https://ui.raulcarini.dev/r/icon-picker-custom-color.json",
    r: "@ui/icon-picker-custom-color",
    component: IconPickerExampleCustomColor,
  },
  {
    name: "Icon Picker Virtua",
    description: "A virtualization implementation using the `virtua` library.",
    registry: "https://ui.raulcarini.dev/r/icon-picker-virtua.json",
    r: "@ui/icon-picker-virtua",
    component: IconPickerExampleVirtua,
  },
  {
    name: "Icon Picker Tanstack",
    description:
      "A virtualization implementation using '@tanstack/react-virtual'.",
    registry: "https://ui.raulcarini.dev/r/icon-picker-tanstack.json",
    r: "@ui/icon-picker-tanstack",
    component: IconPickerExampleTanstack,
  },
  {
    name: "Icon Picker Virtualized",
    description: "A virtualization implementation using 'react-virtualized'.",
    registry: "https://ui.raulcarini.dev/r/icon-picker-virtualized.json",
    r: "@ui/icon-picker-virtualized",
    component: IconPickerExampleVirtualized,
  },
  {
    name: "Icon Picker Popover",
    description:
      "An implementation integrated within a popover for compact UI.",
    registry: "https://ui.raulcarini.dev/r/icon-picker-popover.json",
    r: "@ui/icon-picker-popover",
    component: IconPickerExamplePopover,
  },
];

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto flex flex-col px-4 py-8 flex-1 gap-8 md:gap-12">
      {components.map((component) => (
        <div
          key={component.name}
          id={component.name.toLowerCase().replace(/ /g, "-")}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-2 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm line-clamp-1 font-medium">
                {component.name}
              </span>
              <Separator
                orientation="vertical"
                className="!h-4 hidden lg:flex"
              />
              <span className="text-sm text-muted-foreground line-clamp-1 hidden lg:flex">
                {component.description}
              </span>
            </div>
            <div className="flex gap-2">
              <CopyShadcn text={`npx shadcn@latest add ${component.r}`} />
              <CopyURL url={component.registry} />
              <OpenV0 registry={component.registry} />
            </div>
          </div>
          <div className="flex items-center border rounded-lg justify-center min-h-[400px] p-4 md:p-10 relative bg-muted/30">
            <component.component />
          </div>
        </div>
      ))}
    </main>
  );
}
