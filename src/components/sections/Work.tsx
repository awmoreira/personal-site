"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const COLORS = [
  { gradient: "from-indigo-500/15 to-violet-500/15", border: "rgba(99,102,241,0.3)" },
  { gradient: "from-violet-500/15 to-purple-500/15", border: "rgba(139,92,246,0.3)" },
  { gradient: "from-cyan-500/15 to-indigo-500/15", border: "rgba(6,182,212,0.3)" },
];

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="work" ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-indigo-500" />
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">
              {t.work.label}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-syne text-4xl lg:text-5xl font-bold text-white mb-14"
          >
            {t.work.headline1}{" "}
            <span className="gradient-text">{t.work.headline2}</span>
          </motion.h2>

          <motion.div variants={staggerContainer} className="space-y-4">
            {t.work.projects.map((project, i) => {
              const isOpen = open === i;
              const col = COLORS[i];
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`group relative rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden bg-gradient-to-br ${col.gradient}`}
                  style={{ borderColor: col.border }}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1 min-w-0">
                        <span
                          className="font-syne text-4xl font-bold leading-none shrink-0 mt-1 opacity-40"
                          style={{ color: col.border }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs text-slate-500 mb-1 tracking-wide">{project.category}</p>
                          <h3 className="font-syne text-xl font-bold text-white">{project.title}</h3>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-slate-500 group-hover:text-white transition-colors shrink-0 mt-1"
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 mt-5 border-t border-white/5">
                            <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                              {project.description}
                            </p>
                            <p className="text-emerald-400 text-xs mb-5 font-medium">
                              ↗ {project.impact}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-400 text-xs">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
