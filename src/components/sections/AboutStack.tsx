"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section id="about" ref={ref} className="section-padding relative bg-[#050510]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Label */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">
              {t.about.label}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ── Left: Story ── */}
            <div>
              <motion.h2
                variants={fadeInUp}
                className="font-syne text-3xl lg:text-4xl font-bold text-white leading-snug mb-8"
              >
                {t.about.headline}
              </motion.h2>

              <motion.div variants={staggerContainer} className="space-y-5 text-slate-400 leading-relaxed mb-8">
                <motion.p variants={fadeInUp}>{t.about.p1}</motion.p>
                <motion.p variants={fadeInUp}>{t.about.p2}</motion.p>
              </motion.div>

              <motion.a
                variants={fadeInUp}
                href="#contact"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium transition-colors group"
              >
                {t.about.cta}
              </motion.a>
            </div>

            {/* ── Right: Stack ── */}
            <motion.div variants={staggerContainer} className="space-y-4">
              <motion.p variants={fadeInUp} className="text-xs text-slate-500 uppercase tracking-widest mb-5">
                {t.about.stackLabel}
              </motion.p>
              {t.about.domains.map((domain) => (
                <motion.div key={domain.label} variants={fadeInUp} className="glow-border rounded-xl p-4">
                  <div className="text-xs text-indigo-400 font-semibold tracking-widest uppercase mb-3">
                    {domain.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-xs"
                      >
                        {item}
                      </span>
                    ))}
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
