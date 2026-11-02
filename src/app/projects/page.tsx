import type { Metadata } from "next";

import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/sections/projects";
import { BlurFade } from "@/components/ui/blur-fade";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const description =
  "Agentic AI platforms, product backends, open-source infrastructure, and published research. Mostly production systems with real users.";

export const metadata: Metadata = {
  title: "Projects",
  description,
};

export default function ProjectsPage() {
  return (
    <Section
      id="projects"
      titleAs="h1"
      title="Projects that ship"
      description={description}
      className="pt-28 sm:pt-32"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <BlurFade
            key={project.title}
            delay={index * 0.06}
            className={cn(project.size === "large" && "md:col-span-2")}
          >
            <ProjectCard project={project} />
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
