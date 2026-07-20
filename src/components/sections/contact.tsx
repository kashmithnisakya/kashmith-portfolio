import { MapPin, Phone } from "lucide-react";

import { LinkedInIcon, MailIcon, UpworkIcon } from "@/components/icons";
import { Section } from "@/components/layout/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { profile } from "@/data/profile";

export function Contact() {
  const linkedin = profile.socials.find((s) => s.label === "LinkedIn");
  const upwork = profile.socials.find((s) => s.label === "Upwork");

  return (
    <div className="relative overflow-hidden">
      <Spotlight className="top-auto -bottom-72 opacity-15" />
      <Section id="contact" className="relative py-28 text-center sm:py-36">
        <BlurFade>
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            What&apos;s next
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            <span className="text-gradient">Let&apos;s build something </span>
            <span className="text-gradient-accent">intelligent.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Open to AI/ML engineering roles, freelance projects, and research
            collaborations. The fastest way to reach me is email — I usually
            reply within a day.
          </p>
        </BlurFade>

        <BlurFade delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>
                <MailIcon className="size-4" /> {profile.email}
              </a>
            </Button>
            {upwork && (
              <Button asChild variant="outline" size="lg">
                <a href={upwork.href} target="_blank" rel="noopener noreferrer">
                  <UpworkIcon className="size-4" /> Hire me on Upwork
                </a>
              </Button>
            )}
            {linkedin && (
              <Button asChild variant="outline" size="lg">
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
    </div>
  );
}
