import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Allan Moreira — Engineering Leader & Technical Architect",
  description:
    "Senior Software Engineer and Technical Leader with 20+ years building scalable digital products. Staff Engineer, Principal Engineer, AI Product Engineering.",
  keywords: [
    "Software Engineer",
    "Technical Lead",
    "Staff Engineer",
    "Principal Engineer",
    "AI Engineering",
    "Frontend Architecture",
    "System Design",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Allan Moreira" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Allan Moreira — Engineering Leader & Technical Architect",
    description:
      "20+ years building scalable digital products. Staff Engineer, Technical Lead, AI Product Engineer.",
    siteName: "Allan Moreira Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allan Moreira — Engineering Leader",
    description:
      "20+ years building scalable digital products internationally.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
