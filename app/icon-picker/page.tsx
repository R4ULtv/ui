import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

import CopyShadcn from "@/components/copy-shadcn";
import CopyURL from "@/components/copy-url";
import OpenCode from "@/components/open-code";
import OpenV0 from "@/components/open-v0";

import {
  IconPickerExample,
  IconPickerExampleCustomColor,
  IconPickerExampleMultiple,
  IconPickerExamplePopover,
  IconPickerExampleTanstack,
  IconPickerExampleVirtua,
  IconPickerExampleVirtualized,
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
    registry: "icon-picker/icon-picker.json",
    component: IconPickerExample,
  },
  {
    name: "Icon Picker Multiple",
    description:
      "Allows selection of multiple icons for building icon collections.",
    registry: "icon-picker/icon-picker-multiple.json",
    component: IconPickerExampleMultiple,
  },
  {
    name: "Icon Picker Custom Color",
    description: "Enables icon selection with color customization.",
    registry: "icon-picker/icon-picker-custom-color.json",
    component: IconPickerExampleCustomColor,
  },
  {
    name: "Icon Picker Virtua",
    description: "A virtualization implementation using the `virtua` library.",
    registry: "icon-picker/icon-picker-virtua.json",
    component: IconPickerExampleVirtua,
  },
  {
    name: "Icon Picker Tanstack",
    description:
      "A virtualization implementation using '@tanstack/react-virtual'.",
    registry: "icon-picker/icon-picker-tanstack.json",
    component: IconPickerExampleTanstack,
  },
  {
    name: "Icon Picker Virtualized",
    description: "A virtualization implementation using 'react-virtualized'.",
    registry: "icon-picker/icon-picker-virtualized.json",
    component: IconPickerExampleVirtualized,
  },
  {
    name: "Icon Picker Popover",
    description:
      "An implementation integrated within a popover for compact UI.",
    registry: "icon-picker/icon-picker-popover.json",
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
              <CopyShadcn
                text={`npx shadcn@latest add @ui/${component.registry.split("/")[1].split(".")[0]}`}
              />
              <CopyURL
                url={`https://ui.raulcarini.dev/r/${component.registry.split("/")[1]}`}
              />
              <OpenCode
                url={`https://github.com/R4ULtv/ui/blob/master/registry/${component.registry.split(".")[0]}.tsx`}
              />
              <OpenV0
                url={`https://ui.raulcarini.dev/r/${component.registry.split("/")[1]}`}
              />
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
