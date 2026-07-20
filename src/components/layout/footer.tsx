import { socialIcons } from "@/components/icons";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-1">
          {profile.socials.map((social) => {
            const Icon = socialIcons[social.label];
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>

        <p className="font-mono text-xs text-muted-foreground/70">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
