import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Sparkles, Users } from "lucide-react";
import ScrollReveal from "../components/shared/ScrollReveal";
import SectionHeading from "../components/shared/SectionHeading";
import ImpactCounter from "../components/shared/ImpactCounter";

const GIRL_IMG = "https://media.base44.com/images/public/69e737f94c01a225a31a6ef1/f81143dc8_generated_a1a5636d.png";
const UNIFORMS_IMG = "https://media.base44.com/images/public/69e737f94c01a225a31a6ef1/e4da2ee5f_generated_85148072.png";

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Every action we take is guided by our commitment to educational equity for every child.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We maintain full accountability, ensuring every donation directly impacts students' lives.",
  },
  {
    icon: Sparkles,
    title: "Dignity",
    description: "We celebrate the resilience and brilliance of every student, never defining them by their circumstances.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We work alongside local communities, building sustainable systems that outlast our direct involvement.",
  },
];

const timeline = [
  { year: "2018", title: "Foundation Established", description: "Started with 50 students in one rural community." },
  { year: "2019", title: "First Book Drive", description: "Distributed 500 textbooks across 3 schools." },
  { year: "2021", title: "Uniform Program Launch", description: "Began providing school uniforms to 200+ students annually." },
  { year: "2023", title: "School Fees Initiative", description: "Started covering school fees for the most vulnerable students." },
  { year: "2025", title: "Growing Reach", description: "Now serving 1,200+ students across 15 rural communities." },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
                  About Us
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
                  We Believe in the
                  <span className="text-primary"> Power of Education</span>
                </h1>
                <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                  Nchite Foundation is a non-profit organization dedicated to ensuring that
                  vulnerable school children in rural communities have access to the resources
                  they need to pursue their education and realize their full potential.
                </p>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                  From providing basic school supplies to covering tuition fees, we work
                  tirelessly to remove every barrier standing between a child and their education.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden aspect-[3/4] max-h-[500px] mx-auto">
                <img
                  src={GIRL_IMG}
                  alt="A young girl proudly holding her school books"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What Guides Us Every Day"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="group p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="Milestones Along the Way"
          />
          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1.5 mt-2 z-10" />
                    <div className="pl-12 md:pl-0 md:w-1/2">
                      <span className="text-primary font-heading font-bold text-lg">{item.year}</span>
                      <h3 className="font-heading text-xl font-semibold text-foreground mt-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo + Impact */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={UNIFORMS_IMG}
                  alt="Students wearing new school uniforms proudly"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground leading-tight mb-6">
                Meet the Heart Behind
                <span className="text-primary"> the Foundation</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Our team is made up of passionate educators, community leaders, and
                volunteers who share a deep commitment to transforming lives through education.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We work hand-in-hand with local teachers and families to identify the
                students who need support the most, ensuring resources reach those who
                truly deserve them.
              </p>
            </ScrollReveal>
          </div>
          <ImpactCounter />
        </div>
      </section>
    </div>
  );
}