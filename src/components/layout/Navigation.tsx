"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/i18n";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const LangToggle = () => (
    <button
      onClick={() => setLang(lang === "en" ? "pt" : "en")}
      className="flex items-center gap-0.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-indigo-500/50 text-slate-400 hover:text-white transition-all duration-200 text-xs font-semibold tracking-wider"
      aria-label="Toggle language"
    >
      {(["en", "pt"] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="text-white/20 mx-1">/</span>}
          <span className={l === lang ? "text-indigo-400" : ""}>{l.toUpperCase()}</span>
        </span>
      ))}
    </button>
  );

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-syne text-lg font-bold tracking-tight">
            <span className="gradient-text">AM</span>
            <span className="text-white/25">/</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LangToggle />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-400">{t.nav.available}</span>
            </div>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              {t.nav.letsTalk}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LangToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-400 hover:text-white"
              aria-label="Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={cn("block h-0.5 bg-current transition-all duration-200", mobileOpen && "rotate-45 translate-y-1.5")} />
                <span className={cn("block h-0.5 bg-current transition-all duration-200", mobileOpen && "opacity-0")} />
                <span className={cn("block h-0.5 bg-current transition-all duration-200", mobileOpen && "-rotate-45 -translate-y-2")} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 pt-20 glass flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-syne text-3xl font-bold text-white hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold"
            >
              {t.nav.letsTalk}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
