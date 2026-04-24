import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SCHOOL_IMG = "https://media.base44.com/images/public/69e737f94c01a225a31a6ef1/6a7a37668_generated_e6375e09.png";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={SCHOOL_IMG}
          alt="Rural school landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-background leading-tight">
            Every Pen, Every Book, Every Uniform
            <br />
            <span className="text-primary">Changes a Life</span>
          </h2>
          <p className="mt-6 text-background/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Join us in building a world where no child is denied education because of
            poverty. Your contribution today shapes the leaders of tomorrow.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/get-involved"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 min-h-[48px]"
            >
              Donate Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-background/30 text-background rounded-full text-base font-semibold hover:border-background/60 transition-all duration-300 min-h-[48px]"
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}