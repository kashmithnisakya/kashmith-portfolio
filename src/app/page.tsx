import { CurrentFocus } from "@/components/sections/current-focus";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { WorkStrip } from "@/components/sections/work-strip";
import { LatestWriting } from "@/components/sections/writing";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkStrip />
      <FeaturedWork />
      <LatestWriting />
      <CurrentFocus />
    </>
  );
}
