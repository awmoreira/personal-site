import { site } from "@/lib/content";
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      ...(process.env.VERCEL_ENV === "preview"
        ? { disallow: "/" }
        : { allow: "/" }),
    },
    sitemap: `${site}/sitemap.xml`,
  };
}
