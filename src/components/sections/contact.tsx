import { Handshake, MapPin, Phone } from "lucide-react";

import { LinkedInIcon, MailIcon, UpworkIcon } from "@/components/icons";
import { Section } from "@/components/layout/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Contact() {
  const linkedin = profile.socials.find((s) => s.label === "LinkedIn");
  const upwork = profile.socials.find((s) => s.label === "Upwork");

  return (
    <Section id="contact" tone="raised" className="py-24 text-center sm:py-32">
      <BlurFade>
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-card ring-1 ring-border">
          <Handshake aria-hidden="true" className="size-7" strokeWidth={1.5} />
        </div>
        <h2 className="text-gradient mx-auto mt-6 w-fit max-w-3xl pb-1 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Let&apos;s build something intelligent.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-pretty text-muted-foreground">
          Open to AI/ML engineering roles, freelance projects, and research
          collaborations. The fastest way to reach me is email. I usually reply
          within a day.
        </p>
      </BlurFade>

      <BlurFade delay={0.15}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href={`mailto:${profile.email}`}>
              <MailIcon className="size-4" /> Email me
            </a>
          </Button>
          {upwork && (
            <Button asChild variant="soft" size="lg">
              <a href={upwork.href} target="_blank" rel="noopener noreferrer">
                <UpworkIcon className="size-4" /> Hire me on Upwork
              </a>
            </Button>
          )}
          {linkedin && (
            <Button asChild variant="soft" size="lg">
              <a href={linkedin.href} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="size-4" /> LinkedIn
              </a>
            </Button>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Phone className="size-3.5" /> {profile.phone}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-3.5" /> {profile.location} · Remote
            worldwide
          </span>
        </div>
      </BlurFade>
    </Section>
  );
}
