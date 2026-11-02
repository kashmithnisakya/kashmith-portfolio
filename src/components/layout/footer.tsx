import { SocialLinks } from "@/components/layout/social-links";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 sm:px-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
