import type { Metadata } from "next";
import V0Icon from "@/components/icons/v0";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import CopyShadcn from "@/components/copy-shadcn";
import CopyURL from "@/components/copy-url";

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
    registry: "https://ui.raulcarini.dev/r/music-player.json",
    component: MusicPlayerExample,
  },
  {
    name: "Spotify Music Player",
    description: "A music player component with a design inspired by Spotify.",
    registry: "https://ui.raulcarini.dev/r/music-player-spotify.json",
    component: MusicPlayerSpotifyExample,
  },
  {
    name: "Apple Music Player",
    description:
      "A music player component with a design inspired by Apple Music.",
    registry: "https://ui.raulcarini.dev/r/music-player-apple.json",
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
          <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
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
              <Button variant="default" size="sm" asChild>
                <a
                  href={`https://v0.dev/chat/api/open?url=${component.registry}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in
                  <V0Icon />
                </a>
              </Button>
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
