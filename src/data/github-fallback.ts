import type { GitHubStats } from "@/lib/github";

/**
 * Static snapshot used when the GitHub API is unavailable
 * (missing GITHUB_TOKEN, rate limit, network failure).
 * Numbers captured 2026-07-21 via the GraphQL API:
 * contributions = calendar total (last 365 days);
 * commits = totalCommitContributions + restrictedContributionsCount
 * summed across all contribution years (2021-2026).
 */
export const fallbackStats: GitHubStats = {
  totalContributions: 1328,
  totalCommits: 2141,
  totalPRs: 476,
  publicRepos: 28,
  followers: 3,
  totalStars: 0,
  weeks: null,
  isLive: false,
};
