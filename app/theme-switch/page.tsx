import type { Metadata } from "next";
import OpenV0 from "@/components/open-v0";
import { Separator } from "@/components/ui/separator";

import CopyShadcn from "@/components/copy-shadcn";
import CopyURL from "@/components/copy-url";

import { Suspense } from "react";
import ThemeSwitchButton from "@/registry/theme-switch/theme-switch-button";
import ThemeSwitchToggle from "@/registry/theme-switch/theme-switch-toggle";

export const metadata: Metadata = {
  title: "Theme Switch Components",
  description:
    "A collection of Theme Switch components. Using React, TypeScript, and Tailwind CSS. Install the components using the shadcn/cli.",
  openGraph: {
    url: "/theme-switch",
    siteName: "Theme Switch Components",
    images: [
      {
        url: "/theme-switch/og-image.png",
        width: 1200,
        height: 630,
        alt: "Theme Switch Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const components = [
  {
    name: "Theme Switch Button",
    description: "A simple theme switcher button component.",
    registry: "https://ui.raulcarini.dev/r/theme-switch.json",
    r: "@ui/theme-switch",
    component: ThemeSwitchButton,
  },
  {
    name: "Theme Switch Toggle",
    description: "A simple theme switcher toggle component.",
    registry: "https://ui.raulcarini.dev/r/theme-switch.json",
    r: "@ui/theme-switch",
    component: ThemeSwitchToggle,
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
            <Suspense>
              <component.component />
            </Suspense>
          </div>
        </div>
      ))}
    </main>
  );
}
