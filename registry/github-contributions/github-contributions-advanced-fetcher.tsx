"use client";

import * as React from "react";
import GithubContributionsAdvanced from "@/registry/github-contributions/github-contributions-advanced";
import { Contribution } from "@/registry/github-contributions/github-contributions";
import { Grid3x3Icon, TriangleAlertIcon } from "lucide-react";

interface GithubContributionsResponse {
  total: {
    [year: string]: number; // e.g., 'lastYear'
  };
  contributions: Contribution[];
}

interface GithubRepo {
  id: number;
  name: string;
  created_at: string;
}

interface StatusDisplayProps {
  icon: React.ReactNode;
  message: string;
  additionalClasses?: string;
}

const StatusDisplay: React.FC<StatusDisplayProps> = ({
  icon,
  message,
  additionalClasses,
}) => {
  return (
    <div
      className={`w-full max-w-[688px] min-h-[160px] border rounded-md flex flex-col items-center justify-center gap-1 ${
        additionalClasses || ""
      }`}
    >
      {icon}
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
};

const GithubContributionsAdvancedFetcher: React.FC<{ username: string }> = ({
  username,
}) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [contributionsData, setContributionsData] = React.useState<
    Contribution[] | null
  >(null);
  const [newPublicRepoCount, setNewPublicRepoCount] = React.useState<
    number | null
  >(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [contributionsResponse, reposResponse] = await Promise.all([
          fetch(
            `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
          ),
          fetch(`https://api.github.com/users/${username}/repos?sort=created`),
        ]);

        if (!contributionsResponse.ok) {
          throw new Error("Failed to fetch contributions");
        }

        if (!reposResponse.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const contributionsResult: GithubContributionsResponse =
          await contributionsResponse.json();
        const reposResult: GithubRepo[] = await reposResponse.json();

        const publicReposCount = reposResult.filter(
          (repo) =>
            new Date(repo.created_at) >
            new Date(Date.now() - 365 * 24 * 60 * 60 * 1000), // One year ago
        ).length;

        setContributionsData(contributionsResult.contributions);
        setNewPublicRepoCount(publicReposCount);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) {
    return (
      <StatusDisplay
        icon={<Grid3x3Icon className="size-6 stroke-muted-foreground" />}
        message={`Loading advanced contribution data for ${username}...`}
        additionalClasses="motion-safe:animate-pulse"
      />
    );
  }

  if (error) {
    return (
      <StatusDisplay
        icon={<TriangleAlertIcon className="size-6 stroke-destructive" />}
        message={`Error: ${error.message}`}
      />
    );
  }

  if (contributionsData === null || newPublicRepoCount === null) {
    return (
      <StatusDisplay
        icon={<TriangleAlertIcon className="size-6 stroke-muted-foreground" />}
        message="Could not load contribution data."
      />
    );
  }

  return (
    <GithubContributionsAdvanced
      data={contributionsData}
      newPublicRepositories={newPublicRepoCount}
    />
  );
};

export default GithubContributionsAdvancedFetcher;
