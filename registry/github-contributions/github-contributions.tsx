"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Constants
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const CONTRIBUTION_LEVELS = [0, 1, 2, 3, 4] as const;
const CONTRIBUTION_LEVEL_CLASSES = [
  "bg-github-0",
  "bg-github-1",
  "bg-github-2",
  "bg-github-3",
  "bg-github-4",
] as const;

// Types
type ContributionLevel = (typeof CONTRIBUTION_LEVELS)[number];

export interface Contribution {
  date: string;
  count: number;
  level: ContributionLevel;
}

export interface DayContributionMap {
  [key: number]: Contribution[];
}

export interface ContributionCellProps {
  contribution: Contribution;
}

const ContributionCell = React.memo(function ContributionCell({
  contribution,
}: ContributionCellProps) {
  const date = new Date(contribution.date);
  const formattedDate = new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });
  const label = `${contribution.count} contributions on ${formattedDate}`;

  return (
    <td
      role="gridcell"
      aria-label={label}
      className={cn(
        "w-2.5 p-0 rounded-xs -outline-offset-1",
        CONTRIBUTION_LEVEL_CLASSES[contribution.level],
      )}
      title={label}
      tabIndex={0}
    />
  );
});

const WeekdayLabel = React.memo(function WeekdayLabel({
  day,
}: {
  day: number;
}) {
  return (
    <td rowSpan={2} className="text-xs font-semibold pr-6 sm:pr-8 relative">
      <div className="absolute -top-1 -left-1">{WEEKDAYS[day]}</div>
    </td>
  );
});

const MonthLabel = React.memo(function MonthLabel({
  date,
  colSpan,
}: {
  date?: Date;
  colSpan: number;
}) {
  if (!date) return <td colSpan={colSpan} />;
  return (
    <td
      colSpan={colSpan}
      className="text-xs font-semibold first-letter:uppercase"
    >
      {new Date(date).toLocaleString("en-US", { month: "short" })}
    </td>
  );
});

export default function GitHubContributions({
  data,
}: {
  data: Contribution[];
}): React.JSX.Element {
  const contributionsByDay = React.useMemo(() => {
    return data.reduce<DayContributionMap>((acc, contribution) => {
      const day = new Date(contribution.date).getDay();
      if (!acc[day]) acc[day] = [];
      acc[day].push(contribution);
      return acc;
    }, {});
  }, [data]);

  const monthLabels = React.useMemo(
    () =>
      data.reduce<(React.JSX.Element | null)[]>((acc, contribution, i) => {
        const date = new Date(contribution.date);
        const isStartOfWeek = i % 7 === 0;
        const isWithinFirstWeekOfMonth =
          date.getDate() >= 1 && date.getDate() <= 7;
        const isBeforeLastWeek =
          date < new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

        if (
          i === 0 ||
          (isStartOfWeek && isWithinFirstWeekOfMonth && isBeforeLastWeek)
        ) {
          const daysInMonth = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0,
          ).getDate();
          const remainingDays = daysInMonth - date.getDate();

          acc[i] = (
            <MonthLabel
              key={i}
              date={remainingDays > 14 ? date : undefined}
              colSpan={
                i === 0
                  ? Math.ceil(remainingDays / 7)
                  : remainingDays >= 28
                    ? 5
                    : 4
              }
            />
          );
        } else {
          acc[i] = null;
        }
        return acc;
      }, []),
    [data],
  );

  const renderRow = React.useCallback(
    (dayNum: number) => (
      <tr key={dayNum} className="h-2.5" role="row">
        {dayNum === 0 && <td />}
        {dayNum % 2 === 1 && <WeekdayLabel day={dayNum} />}
        {contributionsByDay[dayNum]?.map((contribution, index) => (
          <ContributionCell key={index} contribution={contribution} />
        ))}
      </tr>
    ),
    [contributionsByDay],
  );

  return (
    <div
      className="overflow-x-auto max-w-full"
      role="region"
      aria-label="GitHub contributions calendar"
    >
      <table
        className="border-separate border-spacing-0.5 w-max mx-auto px-2 text-foreground"
        role="grid"
      >
        <thead>
          <tr role="row">
            <td />
            {monthLabels}
          </tr>
        </thead>
        <tbody>{Array.from({ length: 7 }, (_, i) => renderRow(i))}</tbody>
      </table>
    </div>
  );
}
