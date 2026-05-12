"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-syne text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Allan Winckler Moreira. {t.footer.crafted}
        </div>
        <div className="flex items-center gap-6 text-xs text-slate-600">
          <a href="#about" className="hover:text-slate-400 transition-colors">{t.nav.about}</a>
          <a href="#work" className="hover:text-slate-400 transition-colors">{t.nav.work}</a>
          <a href="#contact" className="hover:text-slate-400 transition-colors">{t.nav.contact}</a>
        </div>
      </div>
    </footer>
  );
}
