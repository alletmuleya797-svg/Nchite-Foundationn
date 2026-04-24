import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "../shared/ScrollReveal";

const BOOKS_IMG = "https://media.base44.com/images/public/69e737f94c01a225a31a6ef1/36d8f9c95_generated_c602a829.png";
const CHILDREN_IMG = "https://media.base44.com/images/public/69e737f94c01a225a31a6ef1/777de8454_generated_91715413.png";

export default function StorySection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={CHILDREN_IMG}
                  alt="Children learning together under a tree in a rural community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/5 rounded-2xl overflow-hidden border-4 border-background shadow-xl aspect-square">
                <img
                  src={BOOKS_IMG}
                  alt="School books and pens on a wooden desk"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
                From a Simple Dream to a
                <span className="text-primary"> Living Movement</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Nchite Foundation was born from witnessing the heartbreaking reality of
                talented children unable to attend school due to lack of basic resources.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                What started as a community effort to provide pens and exercise books
                has grown into a comprehensive support system reaching thousands of
                children across multiple rural communities.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
              >
                Read Our Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}