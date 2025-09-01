import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

import CopyShadcn from "@/components/copy-shadcn";
import CopyURL from "@/components/copy-url";
import OpenCode from "@/components/open-code";
import OpenV0 from "@/components/open-v0";

import {
  SearchBarExample,
  SearchBarSuggestionsExample,
} from "@/components/examples/search-bar";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Search Bar Components",
  description:
    "A collection of Search Bar components. Using React, TypeScript, and Tailwind CSS. Install the components using the shadcn/cli.",
  openGraph: {
    url: "/search-bar",
    siteName: "Search Bar Components",
    images: [
      {
        url: "/search-bar/og-image.png",
        width: 1200,
        height: 630,
        alt: "Search Bar Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const components = [
  {
    name: "Search Bar",
    description: "Search bar managing URL queries client-side (Nuqs).",
    registry: "search-bar/search-bar.json",
    component: SearchBarExample,
  },
  {
    name: "Search Bar Suggestions",
    description: "Search bar featuring autosuggestions (Nuqs).",
    registry: "search-bar/search-bar-suggestions.json",
    component: SearchBarSuggestionsExample,
  },
];

export default function Page() {
  return (
    <NuqsAdapter>
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
              <Suspense>
                <component.component />
              </Suspense>
            </div>
          </div>
        ))}
      </main>
    </NuqsAdapter>
  );
}
