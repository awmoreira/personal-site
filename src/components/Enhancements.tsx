"use client";
import { useEffect } from "react";
import type { Locale } from "@/lib/content";
type Position = {
  target: Locale;
  anchor: string;
  offset: number;
  open: string[];
};
export default function Enhancements({
  lang,
  copied,
  copyFailed,
}: {
  lang: Locale;
  copied: string;
  copyFailed: string;
}) {
  useEffect(() => {
    const timeline = document.getElementById("timeline");
    if (!timeline) return;
    const chapters = Array.from(
      document.querySelectorAll<HTMLElement>("[data-chapter]"),
    );
    const anchors = Array.from(
      document.querySelectorAll<HTMLElement>("[data-anchor]"),
    );
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let alive = true;
    const update = () => {
      frame = 0;
      const rect = timeline.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight * 0.48 - rect.top) / rect.height),
      );
      timeline.style.setProperty(
        "--progress",
        media.matches ? "1" : String(progress),
      );
      let active = "";
      for (const chapter of chapters)
        if (chapter.getBoundingClientRect().top <= window.innerHeight * 0.48)
          active = chapter.id;
      chapters.forEach((chapter) => {
        const selected = chapter.id === active;
        chapter.classList.toggle("is-active", selected);
        const link = chapter.querySelector(".year");
        if (selected) link?.setAttribute("aria-current", "step");
        else link?.removeAttribute("aria-current");
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    observer.observe(timeline);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    document.documentElement.classList.add("enhanced");
    let saved: Position | null = null;
    try {
      const raw = sessionStorage.getItem("journey-position");
      if (raw) {
        const value = JSON.parse(raw) as Position;
        if (value.target === lang) saved = value;
        sessionStorage.removeItem("journey-position");
      }
    } catch {
      /* Navigation remains functional without storage. */
    }
    if (saved) {
      const position = saved;
      position.open.forEach((id) => {
        const detail = document.getElementById(id);
        if (detail instanceof HTMLDetailsElement) detail.open = true;
      });
      document.fonts.ready.then(() => {
        if (!alive) return;
        const anchor = document.getElementById(position.anchor);
        if (anchor)
          window.scrollTo({
            top:
              window.scrollY +
              anchor.getBoundingClientRect().top -
              position.offset,
            behavior: "instant",
          });
        schedule();
      });
    }
    const savePosition = (event: Event) => {
      const click = event as MouseEvent;
      if (click.metaKey || click.ctrlKey || click.shiftKey || click.altKey)
        return;
      const link = event.currentTarget as HTMLAnchorElement;
      if (link.dataset.language === lang) {
        event.preventDefault();
        return;
      }
      const anchor = anchors.reduce(
        (nearest, item) =>
          Math.abs(item.getBoundingClientRect().top - 90) <
          Math.abs(nearest.getBoundingClientRect().top - 90)
            ? item
            : nearest,
        anchors[0],
      );
      link.hash = anchor.id;
      try {
        sessionStorage.setItem(
          "journey-position",
          JSON.stringify({
            target: link.dataset.language,
            anchor: anchor.id,
            offset: anchor.getBoundingClientRect().top,
            open: Array.from(
              document.querySelectorAll<HTMLDetailsElement>("details[open]"),
            ).map((el) => el.id),
          }),
        );
      } catch {
        /* The URL fragment provides a fallback. */
      }
    };
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-language]"),
    );
    links.forEach((link) => link.addEventListener("click", savePosition));
    const button = document.querySelector<HTMLButtonElement>("[data-copy]");
    const status = document.querySelector<HTMLElement>(".copy-status");
    const copy = async () => {
      try {
        await navigator.clipboard.writeText("awmoreira@gmail.com");
        if (status) status.textContent = copied;
      } catch {
        if (status) status.textContent = copyFailed;
      }
    };
    button?.addEventListener("click", copy);
    document.fonts.ready.then(() => {
      if (alive) schedule();
    });
    schedule();
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      media.removeEventListener("change", schedule);
      links.forEach((link) => link.removeEventListener("click", savePosition));
      button?.removeEventListener("click", copy);
      document.documentElement.classList.remove("enhanced");
    };
  }, [lang, copied, copyFailed]);
  return null;
}
