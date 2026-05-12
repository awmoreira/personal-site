"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "Allan has an exceptional ability to translate complex technical concepts into business value. He doesn't just ship code — he shapes products.",
    author: "CTO, UK Fintech Company",
    role: "Direct Manager",
    initials: "JS",
  },
  {
    quote:
      "One of the few engineers I've worked with who is equally comfortable discussing architecture, product roadmap, and business strategy. A true technical leader.",
    author: "VP of Engineering",
    role: "Senior Stakeholder",
    initials: "MR",
  },
  {
    quote:
      "The AI development workflows Allan introduced reduced our sprint planning time by 40% and improved PR quality significantly. He's ahead of the curve.",
    author: "Engineering Manager",
    role: "Peer Leader",
    initials: "AK",
  },
  {
    quote:
      "He mentored me from mid-level to senior in 18 months. His approach to code review is educational, not critical. He builds people up.",
    author: "Senior Engineer",
    role: "Mentee",
    initials: "TC",
  },
];

const metrics = [
  { value: "20+", label: "Years shipping software" },
  { value: "50+", label: "Products built & launched" },
  { value: "30+", label: "Engineers mentored" },
  { value: "4", label: "Industries of depth" },
];

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">
              Recognition
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-syne text-4xl lg:text-5xl font-bold text-white mb-16"
          >
            Trusted by{" "}
            <span className="gradient-text">engineers &amp; leaders</span>.
          </motion.h2>

          {/* Metrics bar */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 rounded-2xl glow-border"
          >
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-syne text-3xl font-bold gradient-text mb-1">{m.value}</div>
                <div className="text-slate-500 text-sm">{m.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-5"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl glow-border"
              >
                <div className="text-2xl text-indigo-400/30 font-serif mb-4">&ldquo;</div>
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{t.author}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
