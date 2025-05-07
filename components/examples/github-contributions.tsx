import * as React from "react";
import { subMonths } from "date-fns";

import GitHubContributions from "@/registry/github-contributions/github-contributions";
import GithubContributionsAdvanced from "@/registry/github-contributions/github-contributions-advanced";
import GithubContributionsFetcher from "@/registry/github-contributions/github-contributions-fetcher";
import GithubContributionsAdvancedFetcher from "@/registry/github-contributions/github-contributions-advanced-fetcher";

export interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GithubContributionsExampleProps {
  initialStartDate?: Date;
  initialEndDate?: Date;
}

const getLevelFromCount = (count: number): 0 | 1 | 2 | 3 | 4 => {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
};

const generateSampleData = (startDate: Date, endDate: Date): Contribution[] => {
  const dateRange = [];
  const currentDate = new Date(startDate);

  // Pre-generate all dates
  while (currentDate <= endDate) {
    dateRange.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Map dates to contributions
  return dateRange.map((date) => {
    const hasContribution = Math.random() > 0.4;
    const count = hasContribution ? Math.floor(Math.random() * 15) : 0;

    return {
      date: date.toISOString().split("T")[0],
      count,
      level: getLevelFromCount(count),
    };
  });
};

export const GithubContributionsExample: React.FC<
  GithubContributionsExampleProps
> = ({
  initialEndDate = new Date(),
  initialStartDate = new Date(
    subMonths(new Date(), 12).setDate(
      subMonths(new Date(), 12).getDate() - subMonths(new Date(), 12).getDay(),
    ),
  ),
}) => {
  const data = generateSampleData(initialStartDate, initialEndDate);

  return <GitHubContributions data={data} />;
};

export const GithubContributionsAdvancedExample: React.FC<
  GithubContributionsExampleProps
> = ({
  initialEndDate = new Date(),
  initialStartDate = new Date(
    subMonths(new Date(), 12).setDate(
      subMonths(new Date(), 12).getDate() - subMonths(new Date(), 12).getDay(),
    ),
  ),
}) => {
  const data = generateSampleData(initialStartDate, initialEndDate);
  const newPublicRepositories = Math.floor(Math.random() * 9) + 1;

  return (
    <GithubContributionsAdvanced
      data={data}
      newPublicRepositories={newPublicRepositories}
    />
  );
};

export const GithubContributionsFetcherExample = () => {
  return <GithubContributionsFetcher username="R4ULtv" />;
};

export const GithubContributionsAdvancedFetcherExample = () => {
  return <GithubContributionsAdvancedFetcher username="R4ULtv" />;
};
