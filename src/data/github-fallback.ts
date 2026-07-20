import type { GitHubStats } from "@/lib/github";

/**
 * Static snapshot used when the GitHub API is unavailable
 * (missing GITHUB_TOKEN, rate limit, network failure).
 * Numbers captured 2026-07 via the GraphQL API.
 */
export const fallbackStats: GitHubStats = {
  totalContributions: 1300,
  totalCommits: 1100,
  totalPRs: 476,
  publicRepos: 32,
  followers: 3,
  totalStars: 0,
  weeks: null,
  isLive: false,
};
