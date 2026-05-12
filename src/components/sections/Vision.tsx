"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const visionItems = [
  {
    headline: "AI-native engineering teams",
    body: "The next 5 years will divide engineering teams into those that use AI as a tool and those that think AI-first. I'm building in the latter camp.",
  },
  {
    headline: "Products that think",
    body: "The most valuable software of the next decade will have intelligence baked in — adaptive, predictive, and personalized at scale without extra cost.",
  },
  {
    headline: "Global-first by default",
    body: "The best teams are globally distributed, async-first, and outcome-oriented. Location should never limit talent or opportunity.",
  },
  {
    headline: "Engineering as leverage",
    body: "I want to operate at the level where engineering decisions move company outcomes. Staff and principal roles that sit at the intersection of strategy and execution.",
  },
];

export default function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative bg-[#050510] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">
              Vision
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-syne text-4xl lg:text-6xl font-bold text-white mb-6 max-w-3xl"
          >
            The future I&apos;m{" "}
            <span className="gradient-text">building toward.</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-slate-400 text-xl leading-relaxed mb-20 max-w-2xl">
            Engineering is not just about today&apos;s problems. It&apos;s about positioning for the ones we can&apos;t see yet.
            Here&apos;s how I think about the next chapter.
          </motion.p>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
            {visionItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group"
              >
                <div className="flex items-start gap-4 p-8 rounded-2xl glow-border hover:brightness-110 transition-all duration-300">
                  <div className="font-syne text-4xl font-bold gradient-text leading-none opacity-30 group-hover:opacity-60 transition-opacity">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-white text-xl mb-3">{item.headline}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.body}</p>
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
