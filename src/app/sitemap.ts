import { site } from "@/lib/content";
export default function sitemap() {
  return ["en", "pt"].map((lang) => ({
    url: `${site}/${lang}`,
    alternates: { languages: { en: `${site}/en`, "pt-BR": `${site}/pt` } },
  }));
}
