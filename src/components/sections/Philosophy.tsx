"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const principles = [
  {
    number: "01",
    title: "Systems over features",
    body: "A great feature inside a broken system is just debt. I design for the whole before the parts — scalability, observability, and resilience are not afterthoughts, they're the foundation.",
  },
  {
    number: "02",
    title: "Ship, then iterate",
    body: "Perfection is the enemy of momentum. I bias toward working software over comprehensive planning, while ensuring the architecture supports rapid iteration without accumulating technical debt.",
  },
  {
    number: "03",
    title: "Code is communication",
    body: "Software is read far more than it's written. Every function, module, and PR message is a message to a future engineer. I write with empathy for that reader.",
  },
  {
    number: "04",
    title: "Own the outcome",
    body: "I don't just write code, I own the outcome. That means understanding business context, pushing back when requirements don't make sense, and celebrating when the product moves the needle.",
  },
  {
    number: "05",
    title: "AI amplifies, not replaces",
    body: "AI is the most powerful tool in my arsenal. I use it to accelerate research, automate the tedious, and augment decision-making — while keeping human judgment at the center of every important decision.",
  },
  {
    number: "06",
    title: "Context over credentials",
    body: "What matters is understanding the context: the users, the constraints, the business model, and the technical landscape. The right solution is always context-specific.",
  },
];

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" ref={ref} className="section-padding relative bg-[#050510]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">
              Engineering Philosophy
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-syne text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl"
          >
            How I think about{" "}
            <span className="gradient-text">building software.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 text-lg mb-16 max-w-xl">
            Principles that guide every technical decision, every PR, and every conversation with stakeholders.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden"
          >
            {principles.map((p) => (
              <motion.div
                key={p.number}
                variants={fadeInUp}
                className="p-8 bg-[#050510] hover:bg-white/[0.02] transition-colors duration-300 group"
              >
                <div className="font-syne text-4xl font-bold text-white/5 mb-6 group-hover:text-indigo-500/20 transition-colors">
                  {p.number}
                </div>
                <h3 className="font-syne font-semibold text-white text-lg mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
