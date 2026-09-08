import { ImageResponse } from "next/og.js";
import { createElement as h } from "react";
import { readFileSync, writeFileSync } from "node:fs";
import { content } from "../src/lib/content.ts";
const portrait =
  "data:image/jpeg;base64," +
  readFileSync(new URL("../public/portrait.jpg", import.meta.url)).toString(
    "base64",
  );
for (const lang of ["en", "pt"]) {
  const image = new ImageResponse(
    h(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f7f7f8",
          color: "#202124",
          padding: "70px",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      },
      h(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
          },
        },
        h("span", null, "Allan Winckler"),
        h(
          "span",
          { style: { color: "#4255c7", fontSize: 18 } },
          lang === "en" ? "PRODUCT · ENGINEERING · AI" : "PRODUTO · ENGENHARIA · IA",
        ),
      ),
      h(
        "div",
        { style: { display: "flex", gap: 60, alignItems: "center" } },
        h(
          "div",
          { style: { display: "flex", flexDirection: "column", width: 680 } },
          h(
            "div",
            {
              style: {
                fontSize: lang === "pt" ? 58 : 66,
                fontWeight: 700,
                letterSpacing: "-3px",
                lineHeight: 1.1,
              },
            },
            content[lang].headline,
          ),
          h(
            "div",
            { style: { marginTop: 30, fontSize: 20, color: "#65676e" } },
            "Product Engineer · Founder",
          ),
        ),
        h("img", {
          src: portrait,
          width: 270,
          height: 270,
          style: { borderRadius: 22, objectFit: "cover" },
        }),
      ),
      h(
        "div",
        {
          style: {
            display: "flex",
            borderTop: "1px solid #dddde3",
            paddingTop: 24,
            color: "#65676e",
            fontSize: 18,
            justifyContent: "space-between",
          },
        },
        h("span", null, lang === "en" ? "Porto Alegre, Brazil · Remote" : "Porto Alegre, Brasil · Remoto"),
        h(
          "span",
          { style: { color: "#4255c7" } },
          lang === "en"
            ? "Explore my journey ↗"
            : "Percorrer minha trajetória ↗",
        ),
      ),
    ),
    { width: 1200, height: 630 },
  );
  writeFileSync(
    new URL(`../public/og-${lang}.png`, import.meta.url),
    Buffer.from(await image.arrayBuffer()),
  );
}
