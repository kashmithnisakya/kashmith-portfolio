import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} | Software Engineer · AI/ML`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description: profile.bio,
  keywords: [
    "Kashmith Samaranayaka",
    "Kashmith Nisakya",
    "Software Engineer",
    "AI/ML Engineer",
    "LLM",
    "Agentic AI",
    "MLOps",
    "Jaseci",
    "Sri Lanka",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  openGraph: {
    title,
    description: profile.bio,
    url: profile.siteUrl,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.bio,
    creator: "@nisakyamsk",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.alias,
  url: profile.siteUrl,
  image: `${profile.siteUrl}${profile.photo}`,
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Jaseci Lab",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.education.school,
  },
  email: `mailto:${profile.email}`,
  sameAs: profile.socials
    .filter((social) => social.href.startsWith("http"))
    .map((social) => social.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
