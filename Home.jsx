import React from "react";
import HeroSection from "../components/home/HeroSection";
import MissionSection from "../components/home/MissionSection";
import StorySection from "../components/home/StorySection";
import ImpactCounter from "../components/shared/ImpactCounter";
import CTASection from "../components/home/CTASection";
import ScrollReveal from "../components/shared/ScrollReveal";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
                Our Impact
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
                Numbers That Tell Our Story
              </h2>
            </div>
          </ScrollReveal>
          <ImpactCounter />
        </div>
      </section>

      <MissionSection />
      <StorySection />
      <CTASection />
    </>
  );
}