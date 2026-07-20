import { ExternalLink } from "lucide-react";

import { GitHubIcon } from "@/components/icons";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { GlowCard } from "@/components/ui/glow-card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects that ship"
      description="Agentic AI platforms, generative media pipelines, and published research. Mostly production systems with real users."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <BlurFade
            key={project.title}
            delay={index * 0.06}
            className={cn(project.size === "large" && "md:col-span-2")}
          >
            <GlowCard className="h-full">
              <div className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-xs tracking-[0.15em] text-primary uppercase">
                    {project.category}
                  </p>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <GitHubIcon className="size-4" />
                      </a>
                    )}
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} website`}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.tagline}
                </p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.highlight && (
                  <Badge variant="accent" className="mt-4">
                    {project.highlight}
                  </Badge>
                )}

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </GlowCard>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
