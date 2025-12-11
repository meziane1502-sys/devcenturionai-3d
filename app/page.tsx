import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Pricing } from "@/components/main/pricing";
import { Timeline } from "@/components/main/timeline";
import { QuoteCalculator } from "@/components/main/quote-calculator";
import { Testimonials } from "@/components/main/testimonials";
import { FAQ } from "@/components/main/faq";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Timeline />
        <Encryption />
        <Projects />
        <Testimonials />
        <Pricing />
        <QuoteCalculator />
        <FAQ />
      </div>
    </main>
  );
}
