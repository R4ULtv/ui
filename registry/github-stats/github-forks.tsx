import * as React from "react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { GitForkIcon } from "lucide-react";

export function GithubForks({ repo }: { repo: string }) {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none group">
      <a href={`https://github.com/${repo}`} target="_blank" rel="noreferrer">
        <GitForkIcon className="group-hover:scale-110 transition-transform duration-200 ease-out" />
        <React.Suspense fallback={<Skeleton className="h-4 w-9" />}>
          <ForksCount repo={repo} />
        </React.Suspense>
      </a>
    </Button>
  );
}

export async function ForksCount({ repo }: { repo: string }) {
  const data = await fetch(`https://api.github.com/repos/${repo}`, {
    next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
  });
  const json: { forks_count: number } = await data.json();

  return (
    <p className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-200 ease-out">
      <span className="tabular-nums">
        {json.forks_count >= 1000
          ? `${(json.forks_count / 1000).toFixed(1)}k`
          : json.forks_count.toLocaleString()}
      </span>{" "}
      forks
    </p>
  );
}
