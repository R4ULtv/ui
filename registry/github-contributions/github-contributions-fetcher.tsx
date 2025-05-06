"use client";

import * as React from "react";
import GitHubContributions, {
  Contribution,
} from "@/registry/github-contributions/github-contributions";
import { Grid3x3Icon, TriangleAlertIcon } from "lucide-react";

interface GithubContributionsResponse {
  total: {
    [year: string]: number; // 'lastYear'
  };
  contributions: Array<Contribution>;
}

interface StatusDisplayProps {
  icon: React.ReactNode;
  message: string;
  additionalClasses?: string;
}

// Helper component to display loading/error states
const StatusDisplay: React.FC<StatusDisplayProps> = ({
  icon,
  message,
  additionalClasses,
}) => {
  return (
    <div
      className={`w-full max-w-[688px] h-[104px] border rounded-md flex flex-col items-center justify-center gap-1 ${
        additionalClasses || ""
      }`}
    >
      {icon}
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
};

const GithubContributionsFetcher: React.FC<{ username: string }> = ({
  username,
}) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [data, setData] = React.useState<Contribution[] | null>(null);

  React.useEffect(() => {
    const fetchContributionData = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const result: GithubContributionsResponse = await response.json();
        setData(result.contributions);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributionData();
  }, [username]);

  if (loading) {
    return (
      <StatusDisplay
        icon={<Grid3x3Icon className="size-6 stroke-muted-foreground" />}
        message={`Loading ${username}'s contributions...`}
        additionalClasses="motion-safe:animate-pulse"
      />
    );
  }

  if (data === null || error) {
    return (
      <StatusDisplay
        icon={<TriangleAlertIcon className="size-6 stroke-muted-foreground" />}
        message="Could not load contributions."
      />
    );
  }

  return <GitHubContributions data={data} />;
};

export default GithubContributionsFetcher;
