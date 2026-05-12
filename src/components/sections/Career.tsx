"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const milestones = [
  {
    period: "2004–2010",
    era: "The Foundation",
    role: "Software Developer",
    context: "Public Sector & Early Web",
    story:
      "Built digital infrastructure for public institutions when the web was transforming governance. Learned that software always serves humans, not the other way around.",
    tags: ["PHP", "Java", "MySQL", "Early Web"],
    color: "from-slate-500 to-slate-400",
  },
  {
    period: "2010–2015",
    era: "The Entrepreneur",
    role: "Founder & Technical Co-founder",
    context: "Startup Ecosystem",
    story:
      "Co-founded two ventures, building everything from product to architecture to go-to-market. Learned to move fast, kill assumptions, and validate before building.",
    tags: ["React", "Node.js", "MongoDB", "AWS", "Product Strategy"],
    color: "from-violet-500 to-indigo-500",
  },
  {
    period: "2015–2019",
    era: "The Specialist",
    role: "Senior Frontend Engineer",
    context: "Fintech & SaaS Startups",
    story:
      "Went deep on frontend architecture and performance. Designed component systems, led migration from legacy stacks, and shipped products used by thousands daily.",
    tags: ["React", "TypeScript", "GraphQL", "Performance", "System Design"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    period: "2019–2022",
    era: "The Architect",
    role: "Tech Lead & Principal Engineer",
    context: "Scale-ups & Logistics Tech",
    story:
      "Led engineering teams of 8–15 across multiple time zones. Architected systems that scaled from thousands to millions of users. Mentored engineers into senior roles.",
    tags: ["Architecture", "Kubernetes", "Leadership", "Mentoring", "Blockchain"],
    color: "from-fuchsia-500 to-violet-500",
  },
  {
    period: "2022–Present",
    era: "The Global Engineer",
    role: "Staff Engineer (UK)",
    context: "International & AI Era",
    story:
      "Operating at the intersection of engineering leadership and product strategy for an international company. Integrating AI into development workflows, mentoring globally distributed teams.",
    tags: ["AI/ML", "Staff Engineering", "Product Thinking", "Remote Leadership"],
    color: "from-indigo-400 to-cyan-500",
  },
];

export default function Career() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background accent lines */}
      <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">
              Career Arc
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-syne text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Twenty years of{" "}
            <span className="gradient-text">intentional evolution.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 text-lg mb-20 max-w-xl">
            Not a résumé. A story of compounding growth, deliberate choices, and expanding impact.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.period}
                variants={fadeInUp}
                className={i % 2 === 1 ? "lg:mt-16" : ""}
              >
                <div className="p-8 rounded-2xl glow-border hover:brightness-110 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${m.color} shrink-0`} />
                    <span className="text-slate-500 text-sm font-mono">{m.period}</span>
                  </div>
                  <div className="mb-2">
                    <span className={`font-syne text-xs font-semibold tracking-widest uppercase bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>
                      {m.era}
                    </span>
                  </div>
                  <h3 className="font-syne text-xl font-bold text-white mb-1">{m.role}</h3>
                  <p className="text-slate-500 text-sm mb-4">{m.context}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{m.story}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-500 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
