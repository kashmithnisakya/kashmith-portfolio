import "server-only";

import { githubLogin } from "@/data/profile";
import { fallbackStats } from "@/data/github-fallback";

const GITHUB_GRAPHQL = "https://api.github.com/graphql";
const REVALIDATE_SECONDS = 3600;

export type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type ContributionWeek = {
  days: ContributionDay[];
};

export type GitHubStats = {
  /** Contributions over the last 365 days. */
  totalContributions: number;
  /** All-time commits (public + private counts, summed per contribution year). */
  totalCommits: number;
  /** All-time pull requests. */
  totalPRs: number;
  publicRepos: number;
  followers: number;
  totalStars: number;
  /** 53-week contribution calendar; null when unavailable. */
  weeks: ContributionWeek[] | null;
  /** False when fallback data is being shown. */
  isLive: boolean;
};

const LEVEL_MAP: Record<string, ContributionDay["level"]> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const STATS_QUERY = /* GraphQL */ `
  query PortfolioStats($login: String!) {
    user(login: $login) {
      followers {
        totalCount
      }
      pullRequests {
        totalCount
      }
      repositories(
        first: 100
        ownerAffiliations: OWNER
        privacy: PUBLIC
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        totalCount
        nodes {
          stargazerCount
        }
      }
      contributionsCollection {
        totalCommitContributions
        restrictedContributionsCount
        contributionYears
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

interface StatsQueryResult {
  user: {
    followers: { totalCount: number };
    pullRequests: { totalCount: number };
    repositories: {
      totalCount: number;
      nodes: { stargazerCount: number }[];
    };
    contributionsCollection: {
      totalCommitContributions: number;
      restrictedContributionsCount: number;
      contributionYears: number[];
      contributionCalendar: {
        totalContributions: number;
        weeks: {
          contributionDays: {
            date: string;
            contributionCount: number;
            contributionLevel: string;
          }[];
        }[];
      };
    };
  };
}

type YearCommits = {
  totalCommitContributions: number;
  restrictedContributionsCount: number;
};

async function githubGraphQL<T>(
  query: string,
  variables: Record<string, unknown>,
): Promise<T> {
  const res = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      "User-Agent": "kashmith.com-portfolio",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`GitHub API responded ${res.status}`);
  }

  const json = (await res.json()) as { data?: T; errors?: { message: string }[] };
  if (json.errors?.length || !json.data) {
    throw new Error(json.errors?.[0]?.message ?? "Empty GraphQL response");
  }
  return json.data;
}

/** Sums commit contributions across every contribution year of the account. */
async function fetchAllTimeCommits(years: number[]): Promise<number> {
  if (years.length === 0) return 0;

  const fields = years
    .map(
      (y) =>
        `y${y}: contributionsCollection(from: "${y}-01-01T00:00:00Z", to: "${y}-12-31T23:59:59Z") {
          totalCommitContributions
          restrictedContributionsCount
        }`,
    )
    .join("\n");

  const data = await githubGraphQL<{ user: Record<string, YearCommits> }>(
    `query CommitsByYear($login: String!) { user(login: $login) { ${fields} } }`,
    { login: githubLogin },
  );

  return Object.values(data.user).reduce(
    (sum, y) =>
      sum + y.totalCommitContributions + y.restrictedContributionsCount,
    0,
  );
}

export async function getGitHubStats(): Promise<GitHubStats> {
  if (!process.env.GITHUB_TOKEN) {
    console.warn("[github] GITHUB_TOKEN not set — using fallback stats");
    return fallbackStats;
  }

  try {
    const data = await githubGraphQL<StatsQueryResult>(STATS_QUERY, {
      login: githubLogin,
    });

    const { user } = data;
    const contributions = user.contributionsCollection;

    const totalCommits = await fetchAllTimeCommits(
      contributions.contributionYears,
    );

    return {
      totalContributions: contributions.contributionCalendar.totalContributions,
      totalCommits,
      totalPRs: user.pullRequests.totalCount,
      publicRepos: user.repositories.totalCount,
      followers: user.followers.totalCount,
      totalStars: user.repositories.nodes.reduce(
        (sum, repo) => sum + repo.stargazerCount,
        0,
      ),
      weeks: contributions.contributionCalendar.weeks.map((week) => ({
        days: week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: LEVEL_MAP[day.contributionLevel] ?? 0,
        })),
      })),
      isLive: true,
    };
  } catch (error) {
    console.warn("[github] stats fetch failed — using fallback:", error);
    return fallbackStats;
  }
}
