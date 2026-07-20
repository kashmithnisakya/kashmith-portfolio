export type SocialLabel = "GitHub" | "LinkedIn" | "X" | "Upwork" | "Email";

export interface Social {
  label: SocialLabel;
  href: string;
}

export interface Profile {
  name: string;
  alias: string;
  role: string;
  eyebrow: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  education: {
    school: string;
    degree: string;
    period: string;
    detail: string;
  };
  photo: string;
  resumeUrl: string;
  siteUrl: string;
  socials: Social[];
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  mode: "Remote" | "On-site" | "Hybrid";
  highlights: string[];
  tech: string[];
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  href?: string;
  size: "large" | "small";
  highlight?: string;
  category: string;
}

export interface Publication {
  venue: string;
  year: number;
  title: string;
  authors: string;
  href: string;
  award?: string;
  summary: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  status: "completed" | "in-progress";
}
