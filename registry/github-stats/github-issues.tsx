import * as React from "react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CircleDotIcon } from "lucide-react";

export function GithubIssues({ repo }: { repo: string }) {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none group">
      <a href="https://github.com/r4ultv/ui" target="_blank" rel="noreferrer">
        <CircleDotIcon className="group-hover:scale-110 transition-transform duration-200 ease-out" />
        <React.Suspense fallback={<Skeleton className="h-4 w-10" />}>
          <IssuesCount repo={repo} />
        </React.Suspense>
      </a>
    </Button>
  );
}

export async function IssuesCount({ repo }: { repo: string }) {
  const data = await fetch(
    `https://api.github.com/search/issues?q=repo:${repo}+is:issue+is:open`,
    {
      next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
    },
  );
  const json: { total_count: number } = await data.json();

  return (
    <p className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-200 ease-out">
      <span className="tabular-nums">
        {json.total_count >= 1000
          ? `${(json.total_count / 1000).toFixed(1)}k`
          : json.total_count.toLocaleString()}
      </span>{" "}
      issues
    </p>
  );
}
