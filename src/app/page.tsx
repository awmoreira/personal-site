"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AboutStack from "@/components/sections/AboutStack";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative overflow-x-hidden bg-[#030712]">
        <Navigation />
        <Hero />
        <AboutStack />
        <Work />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
