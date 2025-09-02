import * as React from "react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { StarIcon } from "lucide-react";

export function GithubStars({ repo }: { repo: string }) {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none group">
      <a href="https://github.com/r4ultv/ui" target="_blank" rel="noreferrer">
        <StarIcon className="fill-transparent group-hover:fill-foreground group-hover:scale-110 transition-[fill,scale] duration-200 ease-out" />
        <React.Suspense fallback={<Skeleton className="h-4 w-9" />}>
          <StarsCount repo={repo} />
        </React.Suspense>
      </a>
    </Button>
  );
}

export async function StarsCount({ repo }: { repo: string }) {
  const data = await fetch(`https://api.github.com/repos/${repo}`, {
    next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
  });
  const json: { stargazers_count: number } = await data.json();

  return (
    <p className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-200 ease-out">
      <span className="tabular-nums">
        {json.stargazers_count >= 1000
          ? `${(json.stargazers_count / 1000).toFixed(1)}k`
          : json.stargazers_count.toLocaleString()}
      </span>{" "}
      stars
    </p>
  );
}
