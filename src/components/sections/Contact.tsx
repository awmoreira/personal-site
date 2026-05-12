"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Mail, Calendar, MapPin, ArrowRight } from "lucide-react";
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

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const links = [
    { icon: Mail, label: t.contact.email, value: "contato@allanwinckler.com", href: "mailto:contato@allanwinckler.com" },
    { icon: LinkedinIcon, label: "LinkedIn", value: "/in/awmoreira", href: "https://linkedin.com/in/awmoreira" },
    { icon: GithubIcon, label: "GitHub", value: "/awmoreira", href: "https://github.com/awmoreira" },
    { icon: Calendar, label: t.contact.schedule, value: "Calendly", href: "#" },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden bg-[#050510]">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px]"
          animate={{
            background: [
              "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 65%)",
              "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 65%)",
              "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 65%)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">{t.contact.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="font-syne font-bold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            {t.contact.headline1}{" "}
            <span className="gradient-text-animated">{t.contact.headline2}</span>
            <br />
            {t.contact.headline3}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-slate-400 text-lg leading-relaxed mb-6 max-w-xl mx-auto"
          >
            {t.contact.sub}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-12"
          >
            <MapPin size={13} />
            <span>{t.contact.location}</span>
          </motion.div>

          {/* Contact links */}
          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-3 mb-10 text-left">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={i}
                  href={link.href}
                  variants={fadeInUp}
                  className="group flex items-center gap-4 p-4 rounded-xl glow-border hover:brightness-125 transition-all duration-200"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className="p-2 rounded-lg bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors text-indigo-400 shrink-0">
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-500 mb-0.5">{link.label}</div>
                    <div className="text-white text-sm font-medium truncate">{link.value}</div>
                  </div>
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Primary CTA */}
          <motion.div variants={fadeInUp}>
            <a
              href="mailto:contato@allanwinckler.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-indigo-500/30 group"
            >
              {t.contact.cta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
