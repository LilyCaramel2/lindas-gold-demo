---
name: gold-wanted-static-maintenance
description: Maintain the Gold Wanted Fish Hoek plain-HTML website safely. Use for HTML, CSS, vanilla JavaScript, light/dark appearance, cookie consent, review-branch validation, protected asset handling or production-release preparation.
---

# Gold Wanted static maintenance

## Before editing

1. Open the repository's `AGENTS.md` first. Treat it as the project source of truth.
2. Work in a descriptive review branch. Do not modify `main` until Lily Godden explicitly approves the precise release, unless Lily has explicitly nominated a different authority.
3. Read `docs/ASSET-REGISTER.md` before changing any image, logo, favicon, audio link or visual placement.

## Preserve the architecture

Keep the site as plain HTML5, `lindas-gold.css` and vanilla JavaScript. Do not introduce React, Next.js, a build step, package tooling or a new framework. Keep shared rules in the existing CSS and shared JavaScript files rather than copying them across pages.

## Protect the brand and conversion flow

1. Use the final `images/brand/` files exactly as supplied. Do not crop, recolour, regenerate or edit them.
2. Preserve `images/gw-home-hero-1600x900.png`. Keep Linda and the customer visible; fix readability with layout and overlays, never by replacing or cropping the source image.
3. Retain the dark-navy, silver-white, warm-gold and Harbour Light Blue system. Harbour Light Blue is a UI accent, never a logo background.
4. Keep ink cartridges, refills and toner first in the service hierarchy. Use “Ask us to check availability” rather than a stock promise.
5. Keep the WhatsApp enquiry flow, maps route and genuine Google Reviews link functional. Never invent review content.

## Edit and validate

1. Add a short design-intent comment to the edited CSS or page section.
2. Check all changed internal links, image paths, language-switcher links, canonical URLs and sitemap entries.
3. Check affected pages at desktop and mobile widths in dark and light appearance when relevant. On light photographic heroes, put dark type on a controlled warm-paper or glass reading field.
4. For consent changes, test Essential only and Allow analytics on English and Afrikaans routes. The banner must close even when persistent storage is unavailable.
5. Commit a small, accurate change to the review branch. Record the preview URL, checks and approval gate.

## Release gate

Request Lily’s explicit approval before merging to `main`. After approval, fast-forward `main`, verify the live public URL, then report the commit and routes tested. Request direct client approval only when Lily has explicitly made it a release requirement.
