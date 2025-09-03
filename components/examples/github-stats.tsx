import { GithubForks } from "@/registry/github-stats/github-forks";
import { GithubIssues } from "@/registry/github-stats/github-issues";
import { GithubPR } from "@/registry/github-stats/github-pr";
import { GithubStars } from "@/registry/github-stats/github-stars";
import { GithubStarsProgress } from "@/registry/github-stats/github-stars-progress";

export const GithubStarsExample = () => <GithubStars repo="r4ultv/ui" />;
export const GithubStarsProgressExample = () => (
  <div className="flex items-center justify-center gap-3">
    <GithubStarsProgress repo="r4ultv/ui" /> {/* default */}
    <GithubStarsProgress repo="vercel/v0-sdk" /> {/* 128 */}
    <GithubStarsProgress repo="shuding/nstr" /> {/* 512 */}
    <GithubStarsProgress repo="better-auth/better-auth" /> {/* 4096 */}
  </div>
);
export const GithubForksExample = () => <GithubForks repo="shadcn-ui/ui" />;
export const GithubIssuesExample = () => (
  <GithubIssues repo="zed-industries/zed" />
);
export const GithubPRExample = () => <GithubPR repo="fuma-nama/fumadocs" />;
