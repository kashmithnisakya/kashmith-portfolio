import type { Metadata } from "next";

import { Section } from "@/components/layout/section";
import { FocusGrid } from "@/components/sections/current-focus";
import { nowUpdated } from "@/data/now";

const description = "What I'm focused on at the moment.";

export const metadata: Metadata = {
  title: "Now",
  description,
};

export default function NowPage() {
  return (
    <Section
      id="now"
      titleAs="h1"
      title="Now"
      description={description}
      eyebrow={`Updated ${nowUpdated}`}
      className="pt-28 sm:pt-32"
    >
      <FocusGrid />
    </Section>
  );
}
