"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import type { GitHubStats } from "@/lib/github";

interface StatsTilesProps {
  stats: GitHubStats;
  publicationCount: number;
}

export function StatsTiles({ stats, publicationCount }: StatsTilesProps) {
  const tiles = [
    {
      label: "Contributions",
      sub: "past 12 months",
      value: stats.totalContributions,
    },
    { label: "Commits", sub: "all-time", value: stats.totalCommits },
    { label: "Pull Requests", sub: "all-time", value: stats.totalPRs },
    { label: "Public Repos", sub: "on GitHub", value: stats.publicRepos },
    {
      label: "IEEE Publications",
      sub: "peer-reviewed",
      value: publicationCount,
    },
    { label: "Years of Experience", sub: "and counting", value: 2, suffix: "+" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {tiles.map((tile, index) => (
        <div
          key={tile.label}
          className="rounded-2xl border border-border bg-card/60 p-5"
        >
          <p className="font-mono text-3xl font-semibold text-foreground">
            <NumberTicker value={tile.value} delay={index * 0.08} />
            {tile.suffix && <span className="text-primary">{tile.suffix}</span>}
          </p>
          <p className="mt-2 text-sm text-foreground/80">{tile.label}</p>
          <p className="font-mono text-xs text-muted-foreground">{tile.sub}</p>
        </div>
      ))}
    </div>
  );
}
