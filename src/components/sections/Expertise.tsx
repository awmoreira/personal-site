"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const domains = [
  {
    category: "Frontend Engineering",
    color: "from-indigo-500 to-violet-500",
    skills: ["React / Next.js", "TypeScript", "Performance", "Accessibility", "Design Systems", "Web Animation"],
    level: 98,
  },
  {
    category: "Backend & APIs",
    color: "from-violet-500 to-purple-500",
    skills: ["Node.js", "Python", "REST / GraphQL", "Microservices", "Event-driven", "Database Design"],
    level: 85,
  },
  {
    category: "Architecture",
    color: "from-purple-500 to-fuchsia-500",
    skills: ["System Design", "Scalability", "Cloud Native", "DDD", "CQRS", "API Gateway"],
    level: 88,
  },
  {
    category: "Cloud & DevOps",
    color: "from-fuchsia-500 to-pink-500",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"],
    level: 80,
  },
  {
    category: "AI & Automation",
    color: "from-indigo-400 to-cyan-500",
    skills: ["LLM Integration", "AI Agents", "RAG Systems", "Prompt Engineering", "Workflow Automation", "AI-Assisted Dev"],
    level: 82,
  },
  {
    category: "Leadership",
    color: "from-emerald-500 to-teal-500",
    skills: ["Technical Strategy", "Team Mentoring", "Code Review", "Architecture Review", "Hiring", "Roadmap"],
    level: 90,
  },
];

export default function Expertise() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" ref={ref} className="section-padding relative bg-[#050510]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">
              Technical Depth
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-syne text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Full-stack engineering,{" "}
            <span className="gradient-text">end to end.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 text-lg mb-16 max-w-2xl">
            From pixel-perfect interfaces to distributed systems at scale — I operate across the
            entire stack with depth and precision.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {domains.map((domain) => (
              <motion.div
                key={domain.category}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl glow-border group cursor-default"
              >
                {/* Header with gradient bar */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-syne font-semibold text-white text-sm tracking-wide">
                      {domain.category}
                    </h3>
                    <span className="text-xs text-slate-500">{domain.level}%</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${domain.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${domain.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                    />
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-slate-400 text-xs group-hover:text-slate-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
