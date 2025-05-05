import * as React from "react";
import GithubContributions, {
  Contribution,
} from "@/registry/github-contributions/github-contributions";

export default function GithubContributionsAdvanced({
  data,
  newPublicRepositories,
}: {
  data: Contribution[];
  newPublicRepositories: number;
}) {
  return (
    <div className="flex flex-col gap-2 w-full md:w-min">
      <p className="text-sm text-foreground">
        <span className="font-semibold">
          {data.reduce((acc, item) => acc + item.count, 0)}
        </span>{" "}
        contributions in the last year and{" "}
        <span className="font-semibold">{newPublicRepositories}</span> new
        public repositories.
      </p>
      <GithubContributions data={data} />
      <div className="flex items-center justify-between gap-3 w-full text-xs text-muted-foreground">
        <a
          href="https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile"
          className="hover:underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how we count contributions
        </a>
        <div className="flex items-center gap-1">
          Less
          <div className="size-2.5 p-0 rounded-xs bg-github-0"></div>
          <div className="size-2.5 p-0 rounded-xs bg-github-1"></div>
          <div className="size-2.5 p-0 rounded-xs bg-github-2"></div>
          <div className="size-2.5 p-0 rounded-xs bg-github-3"></div>
          <div className="size-2.5 p-0 rounded-xs bg-github-4"></div>
          More
        </div>
      </div>
    </div>
  );
}
