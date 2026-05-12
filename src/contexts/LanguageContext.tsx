"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { i18n } from "@/lib/i18n";

type T = typeof i18n.en;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: i18n.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("pt")) setLang("pt");
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: i18n[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
