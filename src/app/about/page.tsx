import type { Metadata } from "next";

import { Experience } from "@/components/sections/experience";
import { GitHubActivity } from "@/components/sections/github-activity";
import { Research } from "@/components/sections/research";
import { Skills } from "@/components/sections/skills";
import { profile } from "@/data/profile";
import { getGitHubStats } from "@/lib/github";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About",
  description: profile.bio,
};

export default async function AboutPage() {
  const stats = await getGitHubStats();

  return (
    <>
      <Experience />
      <Skills />
      <Research />
      <GitHubActivity stats={stats} />
    </>
  );
}
