import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedNumber({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  { label: "Students Supported", value: 1200, suffix: "+" },
  { label: "Books Distributed", value: 5000, suffix: "+" },
  { label: "Uniforms Provided", value: 800, suffix: "+" },
  { label: "Communities Reached", value: 15, suffix: "" },
];

export default function ImpactCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300"
        >
          <div className="font-heading text-3xl sm:text-4xl font-bold text-primary">
            <AnimatedNumber target={stat.value} />
            {stat.suffix}
          </div>
          <p className="mt-2 text-muted-foreground text-sm font-medium">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}