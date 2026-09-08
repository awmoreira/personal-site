# Allan Winckler — personal site

Live: https://personal-site-six-sandy.vercel.app

Next.js 16, React 19, TypeScript and Tailwind CSS. English at `/en`, Portuguese at `/pt`; `/` redirects to English. Both pages are pre-rendered. Native links and disclosures work without JavaScript; a small client component adds reading progress, language continuity and clipboard support.

## Develop and validate

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run check
```

`check` starts a temporary production server and checks routes, language, anchors, contact links, metadata, PDFs and images. To check a public deployment, use `BASE_URL=https://your-deployment.vercel.app npm run check`. The GitHub Actions workflow runs lint, build (including TypeScript) and these checks.

## Edit the journey

Edit `src/lib/content.ts`: shared facts and parallel EN/PT copy. Keep experience IDs stable (`access`, `gavea`, `leadup`, `cefet`) so shared links continue working. Dates intentionally overlap. Do not turn the approximate test-writing improvement into an overall productivity claim.

Each story accepts a `products` list with a stable ID, name, context, description, contribution and optional public URL. Use confirmed product names and links; the current rows describe work documented in the CV. Do not label employer projects as independently owned products.

Layout is in `src/app/[lang]/page.tsx`, styles in `src/app/globals.css`, and progressive interactions in `src/components/Enhancements.tsx`. Replace `public/portrait.jpg` to change the photograph. The contact address and external profiles live with the content.

After changing content, regenerate the downloadable resumes and sharing images:

```sh
node scripts/export-content.mjs
python3 -m pip install reportlab
python3 scripts/build-resumes.py
node scripts/build-og.mjs
```

Visually inspect both pages of each PDF and both sharing images. Commit generated files under `public/` with the source changes. The Python PDF renderer uses standard embedded PDF fonts and requires ReportLab. Node 24 supports the TypeScript imports in the asset scripts.

## Publish to the existing Vercel project

```sh
vercel link --project personal-site --scope awmoreiras-projects
vercel deploy --scope awmoreiras-projects
```

Check the preview in desktop and mobile sizes, expand contributions, switch languages mid-journey and test keyboard navigation. Preview builds are marked noindex. After validation, create a production build (rather than promoting a noindex preview):

```sh
vercel deploy --prod --scope awmoreiras-projects
```

The existing project retains `personal-site-six-sandy.vercel.app`. Verify the public routes, downloads and sharing metadata after publishing. Capture the current production deployment ID before each release. If necessary, use `vercel rollback <previous-production-url> --scope awmoreiras-projects`.

The production baseline recorded before the clean timeline redesign was `dpl_ALYbJeaaFGhY8CMGwniNSTF8Wkeg`, URL `https://personal-site-97ryvpsqu-awmoreiras-projects.vercel.app`. Future releases should record their own preceding deployment.

## Interaction and accessibility

The scroll remains native. A normalized SVG stroke draws the opening curve; IntersectionObserver and the Web Animations API reveal dates, nodes, milestones and product rows once as they enter the viewport. Reduced-motion preference disables these entrances, and content remains visible without JavaScript. ResizeObserver recalculates the line when disclosures or viewport dimensions change; fonts are awaited before restoring reading position. EN/PT links preserve the active section, its viewport offset and open disclosures in session storage. Reduced-motion preference shows a complete static line. Old `#about`, `#work` and `#contact` links remain valid. There is no tracking or contact form backend.

## Delivery illustrations

`src/components/DeliveryVisual.tsx` presents a distinct conceptual diagram for each experience. Keep EN/PT labels in sync and use only confirmed work. The Gavea case is based on the author’s additional account: a shared library/BFF for state and backend access across mobile and web/Electron, plus a full mobile refactor without AI assistance. Lighthouse is no longer used as a career highlight. Product anchors remain stable even as their presentation evolves.

The QikServe / The Access Group split uses September 2024 as the corporate acquisition milestone, rather than a change of products or squad. Both phases cover Online Ordering and Kiosk Ordering. The author places menu-manager/POS consolidation and end-to-end Devin AI workflows in the Access phase. Acquisition source: https://resources.qikserve.com/news/the-access-group-announces-the-acquisition-of-hospitality-digital-order-and-pay-specialist-qikserve .
