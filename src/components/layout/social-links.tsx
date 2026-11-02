import { Fragment } from "react";

import { profile } from "@/data/profile";

/** Slash-separated text links; email has its own controls elsewhere. */
export function SocialLinks() {
  const links = profile.socials.filter((social) => social.label !== "Email");

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm">
      {links.map((social, index) => (
        <Fragment key={social.label}>
          {index > 0 && (
            <span aria-hidden="true" className="text-muted-foreground">
              /
            </span>
          )}
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm underline-offset-4 outline-none transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-ring"
          >
            {social.label}
          </a>
        </Fragment>
      ))}
    </div>
  );
}
