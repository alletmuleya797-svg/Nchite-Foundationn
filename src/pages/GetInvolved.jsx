import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Shirt, GraduationCap, PenLine, Heart, Users, HandHeart, ArrowRight } from "lucide-react";
import ScrollReveal from "../components/shared/ScrollReveal";
import SectionHeading from "../components/shared/SectionHeading";

const SCHOOL_IMG = "https://media.base44.com/images/public/69e737f94c01a225a31a6ef1/6a7a37668_generated_e6375e09.png";

const giftOptions = [
  { amount: 10, icon: PenLine, label: "Pen & Supply Kit", description: "Provides a full set of pens, pencils, and a ruler for one student." },
  { amount: 25, icon: BookOpen, label: "Book Bundle", description: "Gives a student a complete set of textbooks for the school year." },
  { amount: 50, icon: Shirt, label: "Full Uniform Set", description: "Provides a complete school uniform including shoes." },
  { amount: 100, icon: GraduationCap, label: "Term School Fees", description: "Covers one full term of school fees for a vulnerable student." },
];

const waysToHelp = [
  {
    icon: Heart,
    title: "Make a Donation",
    description: "Every contribution, no matter the size, directly impacts a child's education. Choose what to fund and see your impact in real time.",
  },
  {
    icon: Users,
    title: "Volunteer With Us",
    description: "Join our team on the ground or remotely. Help with distribution events, mentorship programs, or administrative support.",
  },
  {
    icon: HandHeart,
    title: "Corporate Partnership",
    description: "Partner with us through CSR programs, matching donations, or in-kind contributions to amplify our reach.",
  },
];

export default function GetInvolved() {
  const [selectedGift, setSelectedGift] = useState(1);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={SCHOOL_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              Get Involved
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]">
              Your Generosity
              <span className="text-primary"> Shapes Futures</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              There are many ways to support the education of vulnerable children.
              Choose how you'd like to make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="How to Help"
            title="Three Ways to Change Lives"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {waysToHelp.map((way, i) => (
              <ScrollReveal key={way.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <way.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{way.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{way.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Matrix */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
                  Donate
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground leading-tight mb-4">
                  See What Your
                  <span className="text-primary"> Donation Buys</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Every dollar is allocated with precision. Select an amount to see
                  exactly how your contribution transforms a student's experience.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-4">
                {giftOptions.map((gift, i) => (
                  <motion.button
                    key={gift.amount}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedGift(i)}
                    className={`p-5 rounded-2xl border-2 text-left transition-all duration-300 min-h-[48px] ${
                      selectedGift === i
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <gift.icon className={`w-6 h-6 mb-3 ${selectedGift === i ? "text-primary" : "text-muted-foreground"}`} />
                    <p className="font-heading text-2xl font-bold text-foreground">${gift.amount}</p>
                    <p className="text-sm text-muted-foreground mt-1">{gift.label}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Selected Gift Detail */}
            <ScrollReveal delay={0.2}>
              <motion.div
                key={selectedGift}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  {React.createElement(giftOptions[selectedGift].icon, { className: "w-8 h-8 text-primary" })}
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {giftOptions[selectedGift].label}
                </h3>
                <p className="text-3xl font-heading font-bold text-primary mb-4">
                  ${giftOptions[selectedGift].amount}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {giftOptions[selectedGift].description}
                </p>
                <button className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg min-h-[48px]">
                  Donate ${giftOptions[selectedGift].amount}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Make a
              <span className="text-primary"> Difference?</span>
            </h2>
            <p className="mt-6 text-background/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you donate, volunteer, or partner with us — every action
              creates a ripple of change that reaches generations.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-all duration-300 min-h-[48px]">
                Start Donating
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="mailto:volunteer@nchitefoundation.org"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-background/30 text-background rounded-full text-base font-semibold hover:border-background/60 transition-all duration-300 min-h-[48px]"
              >
                Volunteer Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}