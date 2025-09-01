import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

import CopyShadcn from "@/components/copy-shadcn";
import CopyURL from "@/components/copy-url";
import OpenCode from "@/components/open-code";
import OpenV0 from "@/components/open-v0";

import {
  MusicPlayerAppleExample,
  MusicPlayerExample,
  MusicPlayerSpotifyExample,
} from "@/components/examples/music-player";

export const metadata: Metadata = {
  title: "Music Player Components",
  description:
    "A collection of Music Player components. Using React, TypeScript, and Tailwind CSS. Install the components using the shadcn/cli.",
  openGraph: {
    url: "/music-player",
    siteName: "Music Player Components",
    images: [
      {
        url: "/music-player/og-image.png",
        width: 1200,
        height: 630,
        alt: "Music Player Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const components = [
  {
    name: "Music Player",
    description:
      "A music player component featuring essential playback controls and a progress slider.",
    registry: "music-player/music-player.json",
    component: MusicPlayerExample,
  },
  {
    name: "Spotify Music Player",
    description: "A music player component with a design inspired by Spotify.",
    registry: "music-player/music-player-spotify.json",
    component: MusicPlayerSpotifyExample,
  },
  {
    name: "Apple Music Player",
    description:
      "A music player component with a design inspired by Apple Music.",
    registry: "music-player/music-player-apple.json",
    component: MusicPlayerAppleExample,
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
