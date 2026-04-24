import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, PenLine, Shirt, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "../components/shared/ScrollReveal";
import SectionHeading from "../components/shared/SectionHeading";
import ImpactCounter from "../components/shared/ImpactCounter";
import ApplicationForm from "../components/ourwork/ApplicationForm";

const PEN_IMG = "https://media.base44.com/images/public/69e737f94c01a225a31a6ef1/53aae2b1e_generated_0a361bef.png";
const UNIFORMS_IMG = "https://media.base44.com/images/public/69e737f94c01a225a31a6ef1/e4da2ee5f_generated_85148072.png";
const CHILDREN_IMG = "https://media.base44.com/images/public/69e737f94c01a225a31a6ef1/777de8454_generated_91715413.png";
const BOOKS_IMG = "https://media.base44.com/images/public/69e737f94c01a225a31a6ef1/36d8f9c95_generated_c602a829.png";

const programs = [
  {
    icon: BookOpen,
    title: "Book Distribution Program",
    description: "We partner with publishers and donors to source textbooks and exercise books, distributing them to schools where students often share a single book among ten or more classmates.",
    stat: "5,000+",
    statLabel: "Books Distributed",
    image: BOOKS_IMG,
  },
  {
    icon: PenLine,
    title: "School Supplies Initiative",
    description: "From pens and pencils to mathematical sets and rulers, we ensure every student has the basic tools needed to participate fully in their education.",
    stat: "10,000+",
    statLabel: "Supplies Provided",
    image: PEN_IMG,
  },
  {
    icon: Shirt,
    title: "Uniform Program",
    description: "A school uniform represents dignity and belonging. We provide complete uniform sets to students who would otherwise be turned away from school.",
    stat: "800+",
    statLabel: "Uniforms Gifted",
    image: UNIFORMS_IMG,
  },
  {
    icon: GraduationCap,
    title: "School Fees Support",
    description: "For the most vulnerable students, we cover tuition and examination fees, ensuring that financial hardship never stands between a child and their future.",
    stat: "400+",
    statLabel: "Fees Covered",
    image: CHILDREN_IMG,
  },
];

export default function OurWork() {
  const [showApplication, setShowApplication] = useState(false);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Our Work
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
              Evidence of
              <span className="text-primary"> Change</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Every resource we provide is a stepping stone toward a brighter future.
              Explore the programs that are transforming lives across rural communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-32">
            {programs.map((program, i) => (
              <ScrollReveal key={program.title}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <program.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        Program {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4">
                      {program.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 inline-flex">
                      <span className="font-heading text-3xl font-bold text-primary">{program.stat}</span>
                      <span className="text-sm text-muted-foreground font-medium">{program.statLabel}</span>
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Impact Summary"
            title="Our Collective Impact"
            description="Together, we've created measurable change across rural communities."
          />
          <ImpactCounter />
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="relative p-8 lg:p-16 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-6" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Are You a Student in Need?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed mb-8">
                If you're a vulnerable student in a rural community needing support with
                books, uniforms, or school fees, we want to hear from you.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowApplication(true)}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 min-h-[48px]"
                aria-label="Open student application form"
              >
                Apply for Support
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ApplicationForm isOpen={showApplication} onClose={() => setShowApplication(false)} />
    </div>
  );
}