import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, PenLine, Shirt } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/69e737f94c01a225a31a6ef1/281e9d0b5_generated_f02837b7.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
                Empowering Rural Education
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
            >
              Their Potential
              <br />
              <span className="text-primary">is Our Purpose</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Nchite Foundation bridges the gap between rural potential and global
              opportunity — providing books, pens, uniforms, and school fees to
              vulnerable children who deserve a chance to shine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/get-involved"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 min-h-[48px]"
              >
                Get Involved
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground/20 text-foreground rounded-full text-base font-semibold hover:border-primary hover:text-primary transition-all duration-300 min-h-[48px]"
              >
                See Our Impact
              </Link>
            </motion.div>

            {/* Resource Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-12 flex items-center gap-6"
            >
              {[
                { icon: BookOpen, label: "Books", count: "5,000+" },
                { icon: PenLine, label: "Pens", count: "10,000+" },
                { icon: Shirt, label: "Uniforms", count: "800+" },
              ].map(({ icon: Icon, label, count }) => (
                <div key={label} className="flex items-center gap-3 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{count}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-h-[600px] mx-auto lg:max-h-none">
              <img
                src={HERO_IMG}
                alt="A young student reading in a rural classroom with golden morning light"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-card rounded-2xl p-4 shadow-xl border border-border/50"
            >
              <p className="text-2xl font-heading font-bold text-primary">1,200+</p>
              <p className="text-xs text-muted-foreground font-medium">Students Supported</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}