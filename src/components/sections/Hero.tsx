"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const PARTICLES = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  x: seededRandom(i * 3 + 1) * 100,
  y: seededRandom(i * 3 + 2) * 100,
  size: seededRandom(i * 3 + 3) * 2 + 1,
  duration: seededRandom(i + 100) * 20 + 20,
  delay: seededRandom(i + 200) * 10,
  opacity: seededRandom(i + 300) * 0.25 + 0.08,
}));

const TECH = [
  "TypeScript", "React", "Next.js", "React Native", "Node.js",
  "GraphQL", "Redux", "Zustand", "Storybook", "Tailwind CSS",
  "Jest", "Playwright", "Vitest", "Cypress", "Docker",
  "CI/CD", "Vite", "TypeORM", "Devin AI", "GitHub Copilot",
];

const statValues = ["15+", "5+", "4", "40%"];

export default function Hero() {
  const { t } = useLanguage();
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Background layers ── */}
      <div className="absolute inset-0">
        {/* Base */}
        <div className="absolute inset-0 bg-[#030712]" />

        {/* Orb 1 — top-left indigo */}
        <motion.div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
          animate={{
            background: [
              "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)",
              "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 65%)",
              "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)",
            ],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orb 2 — bottom-right violet */}
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
          animate={{
            background: [
              "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 65%)",
              "radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 65%)",
              "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 65%)",
            ],
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Orb 3 — centre faint */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          animate={{
            background: [
              "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 60%)",
              "radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 60%)",
              "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Grain */}
        <div className="noise-overlay absolute inset-0 opacity-40" />
      </div>

      {/* ── Mouse spotlight ── */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mouse.x}px ${mouse.y}px, rgba(99,102,241,0.13), transparent 40%)`,
        }}
      />

      {/* ── Particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-indigo-400"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{ y: [0, -24, 0], opacity: [p.opacity, p.opacity * 2.5, p.opacity] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 pt-32 pb-12">

        {/* Badge row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glow-border">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shrink-0" />
            <span className="text-xs text-emerald-400 font-medium tracking-wider uppercase">
              {t.hero.badge}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <MapPin size={12} />
            <span>{t.hero.location}</span>
          </div>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 overflow-hidden">
          {[t.hero.headline1, t.hero.headline2, t.hero.headline3].map((line, i) => (
            <motion.div
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <h1
                className="font-syne font-bold leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(3rem, 7.5vw, 7rem)" }}
              >
                {i === 1 ? (
                  <span className="gradient-text-animated">{line}</span>
                ) : (
                  <span className="text-white">{line}</span>
                )}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10"
        >
          {t.hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 hover:shadow-2xl hover:shadow-indigo-500/30"
          >
            {t.hero.cta1}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glow-border text-white font-semibold hover:brightness-125 transition-all duration-200"
          >
            {t.hero.cta2}
          </a>
          <a
            href="https://github.com/awmoreira"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com/in/awmoreira"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 max-w-2xl"
        >
          {statValues.map((val, i) => (
            <div key={i}>
              <div className="font-syne text-3xl font-bold gradient-text mb-1">{val}</div>
              <div className="text-slate-500 text-xs leading-tight">{t.hero.stats[i]}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Tech marquee ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="relative z-20 pb-10 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <motion.div
          className="flex gap-3 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          style={{ width: "max-content" }}
        >
          {[...TECH, ...TECH].map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-slate-500 text-xs border border-white/5 bg-white/[0.02] shrink-0 select-none"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-indigo-500/60 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
