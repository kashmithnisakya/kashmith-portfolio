import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { allSkills, skillGroups } from "@/data/skills";

function SkillPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-card/60 px-4 py-2 font-mono text-sm whitespace-nowrap text-muted-foreground">
      {label}
    </span>
  );
}

export function Skills() {
  const midpoint = Math.ceil(allSkills.length / 2);
  const firstRow = allSkills.slice(0, midpoint);
  const secondRow = allSkills.slice(midpoint);

  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills & technologies"
    >
      <BlurFade>
        <div className="space-y-4">
          <Marquee duration="45s">
            {firstRow.map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </Marquee>
          <Marquee reverse duration="45s">
            {secondRow.map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </Marquee>
        </div>
      </BlurFade>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <BlurFade key={group.category} delay={index * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-5">
              <p className="mb-3 font-mono text-xs tracking-[0.15em] text-primary uppercase">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Badge key={item} variant="default">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
