import * as React from "react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function GithubStarsProgress({ repo }: { repo: string }) {
  return (
    <React.Suspense fallback={<Skeleton className="h-6 w-18" />}>
      <StarsCount repo={repo} />
    </React.Suspense>
  );
}

export async function StarsCount({ repo }: { repo: string }) {
  const data = await fetch(`https://api.github.com/repos/${repo}`, {
    next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
  });
  const json: { stargazers_count: number } = await data.json();

  // Calculate the progress based on the number of stars. 0-128-512-4096
  const progress = Math.min(
    4,
    Math.floor(Math.log(json.stargazers_count / 8) / Math.log(8)) + 1,
  );

  return (
    <Button
      asChild
      size="sm"
      variant="ghost"
      className={cn(
        "h-8 shadow-none group",
        progress === 2 && "dark:hover:bg-[#cd7f32]/10 hover:bg-[#cd7f32]/20",
        progress === 3 && "dark:hover:bg-[#c0c0c0]/10 hover:bg-[#c0c0c0]/20",
        progress === 4 && "dark:hover:bg-[#d4af37]/10 hover:bg-[#d4af37]/20",
      )}
    >
      <a href={`https://github.com/${repo}`} target="_blank" rel="noreferrer">
        <StarIcon
          className={cn(
            "fill-transparent group-hover:fill-foreground group-hover:scale-110 transition-[fill,stroke,scale] duration-200 ease-out",
            progress === 2 &&
              "group-hover:fill-[#cd7f32] group-hover:stroke-[#cd7f32]",
            progress === 3 &&
              "group-hover:fill-[#c0c0c0] group-hover:stroke-[#c0c0c0]",
            progress === 4 &&
              "group-hover:fill-[#d4af37] group-hover:stroke-[#d4af37]",
          )}
        />
        <p className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-200 ease-out">
          <span className="tabular-nums">
            {json.stargazers_count >= 1000
              ? `${(json.stargazers_count / 1000).toFixed(1)}k`
              : json.stargazers_count.toLocaleString()}
          </span>{" "}
          stars
        </p>
      </a>
    </Button>
  );
}
