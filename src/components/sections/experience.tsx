import { GraduationCap } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { GlowCard } from "@/components/ui/glow-card";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Where I've worked"
      title="Experience"
    >
      <ol className="relative ml-3 space-y-12 border-l border-border">
        {experience.map((job, index) => (
          <li key={`${job.company}-${job.role}`} className="relative pl-8">
            <span
              aria-hidden="true"
              className={cn(
                "absolute top-1.5 -left-[7px] size-3.5 rounded-full border-2",
                index === 0
                  ? "border-primary bg-primary shadow-[0_0_12px_0_var(--primary)]"
                  : "border-border bg-background",
              )}
            />
            <BlurFade delay={index * 0.08}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">
                  {job.role}
                  <span className="text-muted-foreground"> · </span>
                  <span className="text-primary">{job.company}</span>
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {job.start} – {job.end}
                </p>
              </div>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {job.location} · {job.mode}
              </p>

              <ul className="mt-4 space-y-2">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span aria-hidden="true" className="mt-[7px] size-1 shrink-0 rounded-full bg-primary/70" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.tech.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </BlurFade>
          </li>
        ))}
      </ol>

      <BlurFade delay={0.2}>
        <div className="mt-14">
          <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            Education
          </h3>
          <GlowCard>
            <div className="flex items-start gap-4 p-6">
              <div className="rounded-xl border border-primary/25 bg-primary/10 p-2.5 text-primary">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <p className="font-semibold">{profile.education.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {profile.education.school} · {profile.education.period}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {profile.education.detail}
                </p>
              </div>
            </div>
          </GlowCard>
        </div>
      </BlurFade>
    </Section>
  );
}
