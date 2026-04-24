import React from "react";
import { BookOpen, GraduationCap, Heart, Users } from "lucide-react";
import ScrollReveal from "../shared/ScrollReveal";
import SectionHeading from "../shared/SectionHeading";

const pillars = [
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Providing books, pens, and essential learning materials to students who need them most.",
  },
  {
    icon: GraduationCap,
    title: "School Fees Support",
    description: "Covering tuition and examination fees so no child is turned away from education.",
  },
  {
    icon: Users,
    title: "Uniform Programs",
    description: "Supplying school uniforms to restore dignity and create a sense of belonging.",
  },
  {
    icon: Heart,
    title: "Community Empowerment",
    description: "Working with local communities to build sustainable support systems for education.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Our Mission"
          title="Building Bridges to Brighter Futures"
          description="Every child deserves access to quality education. We focus on removing the barriers that keep vulnerable children out of school."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.1}>
              <div className="group p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}