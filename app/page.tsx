import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { ShowcaseBand } from "@/components/ShowcaseBand";
import { CTAFooter } from "@/components/CTAFooter";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-ink-900">
      <Hero />
      <Intro />
      <ShowcaseBand />
      <CTAFooter />
    </main>
  );
}
