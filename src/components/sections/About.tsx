"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const pillars = [
  {
    icon: "⚡",
    title: "Systems Thinker",
    desc: "Architect scalable solutions from first principles, balancing complexity with pragmatism.",
  },
  {
    icon: "🎯",
    title: "Product Engineer",
    desc: "Bridge engineering excellence with business outcomes. Code that ships and moves metrics.",
  },
  {
    icon: "🌐",
    title: "International Leader",
    desc: "Delivered products across UK, Brazil, and global remote teams. Fluent in cross-cultural engineering.",
  },
  {
    icon: "🤖",
    title: "AI Native",
    desc: "Integrating LLMs, agents, and automation into modern product development workflows.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-indigo-500/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">
              Identity
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left: Story */}
            <div>
              <motion.h2
                variants={fadeInUp}
                className="font-syne text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
              >
                Not just an engineer.{" "}
                <span className="gradient-text">A builder of systems</span>{" "}
                that last.
              </motion.h2>

              <motion.div
                variants={staggerContainer}
                className="space-y-5 text-slate-400 text-lg leading-relaxed"
              >
                {[
                  "I started writing code when the web was young, building tools for public institutions before startups were a thing. Over two decades, I evolved from a developer who solved technical problems to an engineering leader who shapes products, teams, and companies.",
                  "Today I operate at the intersection of technical depth and product strategy. I architect systems that scale, lead teams with autonomy, ship MVPs that validate ideas, and integrate AI into workflows that amplify human creativity.",
                  "Working internationally for a UK-based company, I bring a global perspective to every engagement — understanding that great software is as much about people, context, and timing as it is about elegant code.",
                ].map((para, i) => (
                  <motion.p key={i} variants={fadeInUp}>
                    {para}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors group"
                >
                  Start a conversation
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            </div>

            {/* Right: Pillars */}
            <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-4">
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  variants={fadeInUp}
                  className="group p-6 rounded-2xl glow-border hover:brightness-110 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{pillar.icon}</span>
                    <div>
                      <h3 className="font-syne font-semibold text-white mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
