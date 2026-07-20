import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { GitHubActivity } from "@/components/sections/github-activity";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Skills } from "@/components/sections/skills";
import { getGitHubStats } from "@/lib/github";

export const revalidate = 3600;

export default async function Home() {
  const stats = await getGitHubStats();

  return (
    <>
      <Hero />
      <GitHubActivity stats={stats} />
      <Projects />
      <Experience />
      <Skills />
      <Research />
      <Contact />
    </>
  );
}
