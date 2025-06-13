import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface Component {
  name: string;
  count: number;
  path: string;
  images: { light: string; dark: string };
  soon?: boolean;
  new?: boolean;
  update?: boolean;
}

const components: Component[] = [
  {
    name: "Icon Picker",
    count: 7,
    path: "/icon-picker",
    images: {
      light: "/icon-picker-light.png",
      dark: "/icon-picker-dark.png",
    },
  },
  {
    name: "Github Contributions",
    count: 4,
    path: "/github-contributions",
    images: {
      light: "/github-contributions-light.png",
      dark: "/github-contributions-dark.png",
    },
  },
  {
    name: "Music Player",
    count: 3,
    path: "/music-player",
    images: {
      light: "/music-player-light.png",
      dark: "/music-player-dark.png",
    },
  },
  {
    name: "Search Bar",
    count: 2,
    path: "/search-bar",
    images: {
      light: "/search-bar-light.png",
      dark: "/search-bar-dark.png",
    },
  },
  {
    name: "Rating Group",
    count: 2,
    path: "/rating-group",
    images: {
      light: "/rating-group-light.png",
      dark: "/rating-group-dark.png",
    },
  },
];

export default function Page() {
  const sortedComponents = [...components].sort((a, b) => {
    if (a.soon !== b.soon) return a.soon ? -1 : 1;
    if (a.new !== b.new) return a.new ? -1 : 1;
    if (a.update !== b.update) return a.update ? -1 : 1;
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-[calc(100vh-164px)]">
      <div className="max-w-3xl space-y-4 max-sm:text-center">
        <h1 className="text-foreground text-4xl/tight font-bold tracking-tight md:text-5xl/tight">
          Open-Source UI Components built with Tailwind CSS, and React.
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          A collection of ready-to-use, importable components to speed up your
          development workflow.
        </p>
      </div>

      <main className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-16">
        {sortedComponents.map((component) => (
          <div className="space-y-3 text-center" key={component.name}>
            <Link
              className={cn(
                "relative inline-flex overflow-hidden rounded-xl border sm:flex group",
                component.soon && "pointer-events-none",
              )}
              href={component.path}
            >
              <Image
                src={component.path + component.images.light}
                width={640}
                height={430}
                alt={`${component.name} components light`}
                loading="lazy"
                className="w-full dark:hidden group-hover:scale-110 transition-transform ease-out duration-200"
              />
              <Image
                src={component.path + component.images.dark}
                width={640}
                height={430}
                alt={`${component.name} components dark`}
                loading="lazy"
                className="hidden w-full dark:block group-hover:scale-110 transition-transform ease-out duration-200"
              />
              {component.soon && (
                <span className="absolute bottom-3 right-4 text-xs text-muted-foreground font-mono">
                  Soon
                </span>
              )}
              {component.update && (
                <span className="absolute bottom-3 right-4 text-xs text-muted-foreground font-mono">
                  Update
                </span>
              )}
              {component.new && (
                <span className="absolute bottom-3 right-4 text-xs text-muted-foreground font-mono">
                  New
                </span>
              )}
            </Link>
            <div>
              <Link
                className={cn(
                  "text-sm font-medium hover:underline",
                  component.soon && "pointer-events-none",
                )}
                href={component.path}
              >
                {component.name}
              </Link>
              <p className="text-muted-foreground text-sm">
                {component.count} Components
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
