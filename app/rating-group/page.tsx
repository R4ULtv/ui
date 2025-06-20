import type { Metadata } from "next";
import OpenV0 from "@/components/open-v0";
import { Separator } from "@/components/ui/separator";

import CopyShadcn from "@/components/copy-shadcn";
import CopyURL from "@/components/copy-url";

import {
  BasicRatingExample,
  CustomIconRatingExample,
  HalfStarRatingExample,
  HeartRatingExample,
  ReadOnlyRatingExample,
} from "@/components/examples/rating-group";

export const metadata: Metadata = {
  title: "Rating Group Components",
  description:
    "A collection of Rating Group components. Using React, TypeScript, and Tailwind CSS. Install the components using the shadcn/cli.",
  openGraph: {
    url: "/rating-group",
    siteName: "Rating Group Components",
    images: [
      {
        url: "/rating-group/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rating Group Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const components = [
  {
    name: "Rating Group",
    description: "A star rating component for user feedback.",
    registry: "https://ui.raulcarini.dev/r/rating-group.json",
    component: BasicRatingExample,
  },
  {
    name: "Half Star Rating",
    description:
      "Advanced example: Rating component that supports half-star ratings.",
    registry: "https://ui.raulcarini.dev/r/rating-group-advanced.json",
    component: HalfStarRatingExample,
  },
  {
    name: "Heart Rating",
    description:
      "Advanced example: Heart-themed rating component with custom colors.",
    registry: "https://ui.raulcarini.dev/r/rating-group-advanced.json",
    component: HeartRatingExample,
  },
  {
    name: "Read-only Rating",
    description:
      "Advanced example: Display-only rating component for showing scores.",
    registry: "https://ui.raulcarini.dev/r/rating-group-advanced.json",
    component: ReadOnlyRatingExample,
  },
  {
    name: "Custom Icon Rating",
    description:
      "Advanced example: Rating with completely custom icons and styling.",
    registry: "https://ui.raulcarini.dev/r/rating-group-advanced.json",
    component: CustomIconRatingExample,
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
                text={`npx shadcn@latest add ${component.registry}`}
              />
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
