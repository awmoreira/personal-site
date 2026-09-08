/* eslint-disable @next/next/no-html-link-for-pages -- Locale links deliberately perform document navigation to restore the localized root, expanded details and reading offset together. */
import ProductChapter from "@/components/ProductChapter";
import DeliveryVisual from "@/components/DeliveryVisual";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content, facts, isLocale, profile, site } from "@/lib/content";
import Enhancements from "@/components/Enhancements";
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const title = "Allan Winckler — Product Engineer & Founder";
  return {
    title,
    description: content[lang].description,
    alternates: {
      canonical: `${site}/${lang}`,
      languages: {
        en: `${site}/en`,
        "pt-BR": `${site}/pt`,
        "x-default": `${site}/en`,
      },
    },
    robots: { index: process.env.VERCEL_ENV !== "preview", follow: true },
    openGraph: {
      title,
      description: content[lang].description,
      url: `${site}/${lang}`,
      locale: lang === "pt" ? "pt_BR" : "en_US",
      type: "profile",
      images: [{ url: `/og-${lang}.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: content[lang].description,
      images: [`/og-${lang}.png`],
    },
  };
}
export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = content[lang];
  const cv = `/resume/allan-winckler-${lang}.pdf`;
  return (
    <>
      <a className="skip" href="#about">
        {t.skip}
      </a>
      <header className="header" id="top">
        <a href="#top" className="wordmark" aria-label="aw. Allan Winckler">
          <span className="monogram">
            aw<span>.</span>
          </span>
          <span className="wordmark-name">allan winckler</span>
        </a>
        <nav
          aria-label={lang === "en" ? "Main navigation" : "Navegação principal"}
        >
          <a className="desktop-link" href="#trajectory">
            {t.journey}
          </a>
          <a className="desktop-link" href="#products">
            {lang === "pt" ? "Produtos" : "Products"}
          </a>
          <a href={cv} download>
            {t.cv} ↓
          </a>
          <a href="#contact">{t.contact}</a>
          <span className="languages">
            <a
              href="/en"
              hrefLang="en"
              lang="en"
              data-language="en"
              aria-label="EN — Read in English"
              aria-current={lang === "en" ? "page" : undefined}
            >
              EN
            </a>
            <span aria-hidden="true">/</span>
            <a
              href="/pt"
              hrefLang="pt-BR"
              lang="pt-BR"
              data-language="pt"
              aria-label="PT — Ler em português"
              aria-current={lang === "pt" ? "page" : undefined}
            >
              PT
            </a>
          </span>
        </nav>
      </header>
      <main>
        <section
          className="hero"
          id="about"
          data-anchor
          aria-labelledby="intro-heading"
        >
          <div className="portrait-stage">
            <div className="identity">
              <p className="micro strong">ALLAN WINCKLER</p>
              <p className="micro">
                {t.location}
                <br />
                15+ {lang === "en" ? "YEARS BUILDING" : "ANOS CONSTRUINDO"}
                <br />
                GMT−3 · {lang === "en" ? "REMOTE" : "REMOTO"}
              </p>
            </div>
            <figure className="portrait">
              <Image
                src="/portrait.jpg"
                alt={t.portrait}
                width={800}
                height={800}
                sizes="(max-width: 600px) 260px, 344px"
                fetchPriority="high"
                preload
              />
              <figcaption className="micro">{t.photoCaption}</figcaption>
            </figure>
            <div className="current">
              <p className="micro accent">{t.now}</p>
              <p className="current-company">The Access Group</p>
              <p className="micro">
                {lang === "pt"
                  ? "ONLINE ORDERING · KIOSK"
                  : "ONLINE ORDERING · KIOSK"}
                <br />
                {lang === "en"
                  ? "ENGINEERING & LEADERSHIP"
                  : "ENGENHARIA & LIDERANÇA"}
              </p>
            </div>
          </div>
          <div className="intro">
            <p className="micro accent eyebrow">{t.eyebrow}</p>
            <h1 id="intro-heading">{t.headline}</h1>
            <p className="intro-copy">{t.intro}</p>
          </div>
          <a className="journey-link micro" href="#trajectory">
            {t.explore}
            <span aria-hidden="true">↘</span>
          </a>
        </section>
        <section className="journey" id="trajectory" aria-label={t.journey}>
          <span id="work" className="legacy-anchor" />
          <div className="connector" aria-hidden="true">
            <svg viewBox="0 0 1000 170" preserveAspectRatio="none">
              <path
                className="desktop-curve curve-base"
                d="M 500 0 C 500 116 160 42 160 170"
              />
              <path
                className="mobile-curve curve-base"
                d="M 500 0 C 500 116 40 42 40 170"
              />
              <path
                className="desktop-curve curve-progress"
                pathLength="1"
                d="M 500 0 C 500 116 160 42 160 170"
              />
              <path
                className="mobile-curve curve-progress"
                pathLength="1"
                d="M 500 0 C 500 116 40 42 40 170"
              />
            </svg>
          </div>
          <p className="sr-only">{t.journeyNote}</p>
          <div className="timeline" id="timeline">
            <div className="track" aria-hidden="true">
              <div className="track-fill" />
            </div>
            <ol className="chapters">
              <ProductChapter lang={lang} />
              {facts.map((fact, i) => {
                const story = t.stories[fact.id];
                return (
                  <li
                    className="chapter"
                    id={fact.id}
                    data-anchor
                    data-chapter
                    key={fact.id}
                  >
                    <a href={`#${fact.id}`} className="year" data-reveal="date">
                      <span>{fact.year}</span>{" "}
                      <span className="year-caption">
                        {i === 0 ? t.now : `0${i + 2}`}
                      </span>
                    </a>
                    <span
                      className="node"
                      data-reveal="node"
                      aria-hidden="true"
                    />
                    <div className="chapter-content" data-reveal="chapter">
                      <p className="micro period">{fact.dates[lang]}</p>
                      <div className="company-row">
                        <span className={`company-logo logo-${fact.id}`}>
                          <Image
                            src={`/company-logos/${fact.id}.${["access", "qikserve"].includes(fact.id) ? "png" : "jpg"}`}
                            alt=""
                            width={
                              ["access", "qikserve"].includes(fact.id)
                                ? 176
                                : 64
                            }
                            height={
                              ["access", "qikserve"].includes(fact.id) ? 49 : 64
                            }
                          />
                        </span>
                        <div>
                          <h2>{fact.company}</h2>
                        </div>
                        {i === 0 && (
                          <span className="present micro">{t.now}</span>
                        )}
                      </div>
                      <h3>
                        {lang === "pt" && fact.id === "cefet"
                          ? "Técnico de Tecnologia da Informação"
                          : fact.role}
                      </h3>
                      <p className="summary">{story.summary}</p>
                      <DeliveryVisual
                        experience={fact.id}
                        lang={lang}
                        anchor={story.products?.[0]?.id}
                      />
                      {!story.products && (
                        <div className="impact">
                          <p className="micro accent">{t.impact}</p>
                          <p>{story.impact}</p>
                        </div>
                      )}
                      {story.details.length > 0 && (
                        <details id={`details-${fact.id}`}>
                          <summary>
                            <span className="when-closed">
                              {t.contribution}
                            </span>
                            <span className="when-open">
                              {t.closeContribution}
                            </span>
                            <span className="plus" aria-hidden="true">
                              +
                            </span>
                          </summary>
                          <div className="detail-body">
                            <ul>
                              {story.details.map((detail) => (
                                <li key={detail}>{detail}</li>
                              ))}
                            </ul>
                            <p className="tech micro">
                              {fact.tags.join(" · ")}
                            </p>
                          </div>
                        </details>
                      )}
                      {story.education && (
                        <div className="education">
                          <p className="micro accent">{t.education}</p>
                          <p>{story.education}</p>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="journey-ending" data-reveal="chapter">
              <span className="end-node" aria-hidden="true" />
              <h2>{t.closingTitle}</h2>
              <p>{t.closing}</p>
              <span className="signature">Allan.</span>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="contact"
          data-anchor
          aria-labelledby="contact-heading"
        >
          <p className="micro accent">
            {lang === "en" ? "THE NEXT CHAPTER" : "O PRÓXIMO CAPÍTULO"}
          </p>
          <h2 id="contact-heading">{t.contactTitle}</h2>
          <p className="contact-copy">{t.contactBody}</p>
          <a className="email" href={`mailto:${profile.email}`}>
            {profile.email}
            <span aria-hidden="true">↗</span>
          </a>
          <button className="copy-button micro" data-copy type="button">
            {t.copy}
          </button>
          <span className="copy-status micro" aria-live="polite" />
          <div className="contact-links micro">
            <a href={profile.linkedin}>LinkedIn ↗</a>
            <a href={profile.github}>GitHub ↗</a>
            <a href={cv} download>
              {t.cv} ↓
            </a>
          </div>
        </section>
      </main>
      <footer>
        <p>
          © {new Date().getFullYear()} {profile.fullName}.<br />
          <span>{t.footer}</span>
        </p>
        <a href="#top" className="micro">
          {t.back} ↑
        </a>
      </footer>
      <Enhancements lang={lang} copied={t.copied} copyFailed={t.copyFailed} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.fullName,
            alternateName: profile.name,
            url: `${site}/${lang}`,
            image: `${site}/portrait.jpg`,
            jobTitle: "Product Engineer & Founder",
            sameAs: [profile.linkedin, profile.github],
          }),
        }}
      />
    </>
  );
}
