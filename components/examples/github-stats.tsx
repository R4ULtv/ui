import { GithubForks } from "@/registry/github-stats/github-forks";
import { GithubIssues } from "@/registry/github-stats/github-issues";
import { GithubPR } from "@/registry/github-stats/github-pr";
import { GithubStars } from "@/registry/github-stats/github-stars";

export const GithubStarsExample = () => <GithubStars repo="r4ultv/ui" />;
export const GithubForksExample = () => <GithubForks repo="r4ultv/ui" />;
export const GithubIssuesExample = () => <GithubIssues repo="r4ultv/ui" />;
export const GithubPRExample = () => <GithubPR repo="r4ultv/ui" />;
