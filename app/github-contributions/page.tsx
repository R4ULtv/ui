import type { Metadata } from "next";
import OpenV0 from "@/components/open-v0";
import { Separator } from "@/components/ui/separator";

import CopyShadcn from "@/components/copy-shadcn";
import CopyURL from "@/components/copy-url";

import {
  GithubContributionsExample,
  GithubContributionsAdvancedExample,
  GithubContributionsFetcherExample,
  GithubContributionsAdvancedFetcherExample,
} from "@/components/examples/github-contributions";

export const metadata: Metadata = {
  title: "Github Contributions Components",
  description:
    "A collection of Github Contributions components. Using React, TypeScript, and Tailwind CSS. Install the components using the shadcn/cli or open it in v0.",
  openGraph: {
    url: "/github-contributions",
    siteName: "Github Contributions Components",
    images: [
      {
        url: "/github-contributions/og-image.png",
        width: 1200,
        height: 630,
        alt: "Github Contributions Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const components = [
  {
    name: "Github Contributions",
    description: "A simple Github contributions table.",
    registry: "https://ui.raulcarini.dev/r/github-contributions.json",
    r: "@ui/github-contributions",
    component: GithubContributionsExample,
  },
  {
    name: "Github Contributions Advanced",
    description: "An advanced Github contributions table.",
    registry: "https://ui.raulcarini.dev/r/github-contributions-advanced.json",
    r: "@ui/github-contributions-advanced",
    component: GithubContributionsAdvancedExample,
  },
  {
    name: "Github Contributions Fetcher",
    description: "A Github contributions table with client-side fetcher.",
    registry: "https://ui.raulcarini.dev/r/github-contributions-fetcher.json",
    r: "@ui/github-contributions-fetcher",
    component: GithubContributionsFetcherExample,
  },
  {
    name: "Github Contributions Advanced Fetcher",
    description:
      "An advanced Github contributions table with client-side fetcher.",
    registry:
      "https://ui.raulcarini.dev/r/github-contributions-advanced-fetcher.json",
    r: "@ui/github-contributions-advanced-fetcher",
    component: GithubContributionsAdvancedFetcherExample,
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
