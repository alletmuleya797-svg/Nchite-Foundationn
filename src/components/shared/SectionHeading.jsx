import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({ label, title, description, center = true }) {
  return (
    <ScrollReveal className={`mb-12 lg:mb-16 ${center ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}