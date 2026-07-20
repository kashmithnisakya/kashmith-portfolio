import { Section } from "@/components/layout/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { publications } from "@/data/publications";
import type { GitHubStats } from "@/lib/github";

import { ContributionGraph } from "./contribution-graph";
import { StatsTiles } from "./stats-tiles";

export function GitHubActivity({ stats }: { stats: GitHubStats }) {
  return (
    <Section
      id="github"
      eyebrow="By the numbers"
      title="GitHub activity, live"
      description="Fetched from the GitHub GraphQL API and revalidated hourly. These are not hand-typed numbers."
    >
      <BlurFade>
        {stats.isLive && (
          <p className="mb-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Live from the GitHub API
          </p>
        )}
        <StatsTiles stats={stats} publicationCount={publications.length} />
        <ContributionGraph weeks={stats.weeks} />
      </BlurFade>
    </Section>
  );
}
