# Gold Wanted — agent rules

Read this file before changing any file in this repository. It is the source of truth for agent work on **Gold Wanted**, Fish Hoek.

## 1. Production and branch safety

1. Work in a new, descriptive review branch. Do not commit directly to `main`.
2. Do **not** merge or push to `main` until **Lily Godden has given explicit approval** for that specific release. Lily is the authorised approver and release authority for this Caramel-managed project unless she explicitly nominates another person. Record the approved commit and the validation performed.
3. Vercel deploys `main` to [goldwantedfishhoek.co.za](https://www.goldwantedfishhoek.co.za/). A review-branch preview is not production.
4. Keep changes small and inspectable. Use plain Git commits with an accurate, short message. Do not rewrite published branch history unless Lily Godden asks for it.
5. Never commit credentials, access tokens, customer information or private contact-form submissions.

## 2. Technology and editing rules

The site is deliberately simple: **HTML5, one shared CSS file, vanilla JavaScript and static assets**. Do not introduce React, Next.js, a build step, a package manager or a new framework.

| Area | Source of truth | Rule |
|---|---|---|
| Global design | `lindas-gold.css` | Keep the Gold Wanted dark-navy, silver-white, warm-gold and Harbour Light Blue design system. Add a short design-intent comment before a new component or visual section. |
| Theme control | `theme.js` | Preserve the light/dark appearance toggle and supplied matching logo artwork. |
| Cookie choice | `cookie-consent.js` | Essential and Analytics choices must dismiss the banner even if browser storage is restricted. GA4 Measurement ID `G-N67SRPL2BS` must load only after Analytics consent. Track only non-personal WhatsApp, directions, form, audio and language actions. |
| Enquiries | `contact-form.js` | The published flow opens a customer-controlled WhatsApp message. Do not claim that an email form submits automatically. |
| Search routes | `sitemap.xml`, `robots.txt` | Keep canonical URLs, English/Afrikaans `hreflang` entries and sitemap routes aligned whenever a public page changes. |

Do not change a logo, favicon, hero image or audio file to make it fit a layout. Change the layout instead.

## 3. Brand, content and business facts

| Requirement | Non-negotiable rule |
|---|---|
| Name | Use **Gold Wanted**, never rename the business to “Linda’s Gold”. |
| Service order | Lead with **ink cartridges, refills and toner** for Fish Hoek and the South Peninsula. Gold and silver jewellery buying is the secondary service. |
| Local people | Refer to Linda and Brendan as the local Gold Wanted team where relevant. |
| Stock | Do not make stock promises. Say **“Ask us to check availability.”** |
| Brands confirmed | Canon, HP, Brother, Lexmark and Samsung. Do not add a brand without confirmation. |
| Jewellery | Accept gold and silver jewellery, plus selected household silver such as cutlery, tea sets and trays. Do not say that Kruger Rands, coins or bullion are accepted. |
| Identification | A seller needs an ID or passport. Stones are returned where possible. |
| Contact | WhatsApp 082 372 7597. Shop 5, Triangle Square, 5 De Waal Rd, Fish Hoek, behind Shoprite. |
| Writing | Use UK/SA spelling, including **jewellery**. Follow short, plain ASD-STE100-style sentences with natural human rhythm. Avoid stock AI phrases, unsupported claims and invented SEO metrics. |
| Reviews | Link to the genuine Google listing only. Never invent, paraphrase or seed ratings, testimonials or review content. |

## 4. Visual system and protected assets

Use `docs/ASSET-REGISTER.md` before selecting a visual asset. The final supplied logo pack in `images/brand/` is protected. Use it **exactly as supplied**: do not crop, recolour, redraw, regenerate, resize its source files or put it on an unauthorised background.

The homepage hero `images/gw-home-hero-1600x900.png` is protected. It shows Linda, the blonde woman viewed from behind, serving an African customer. Do not replace, crop away, cover or demote it. Use a readable overlay or text field instead.

The core colours are:

| Purpose | Value | Use |
|---|---:|---|
| Ink Navy | `#05162c`, `#081c35` | Dark stage, header and footer. Navy must read as navy, not flat black. |
| Silver-white | `#eef1f6` | Light type and contrast. |
| Warm Gold | `#d5c28c` | Primary actions and restrained highlights. |
| Harbour Light Blue | `#269bff` | UI accent, fine borders and glow only; never a logo background. |
| Warm paper | `#f4efe4` | Light-mode surface. |

For light mode, protect text contrast with a deliberate warm-paper or glass reading field. Do not place a dark heading directly on uncontrolled photographic detail.

## 5. Languages and accessibility

English is the default. The approved Afrikaans core routes are `/af/index.html`, `/af/cartridges.html`, `/af/contact.html` and `/af/audio.html`. Retain **inkpatroon** as the Afrikaans term for an ink cartridge.

Do not publish isiXhosa, isiZulu or Sesotho pages or audio until an independent native-speaker review has taken place. Keep translated navigation, WhatsApp prompts, privacy wording, canonical URLs, `hreflang` and audio labels in the same language.

Preserve visible keyboard focus, usable touch targets, meaningful `alt` text and readable contrast on desktop and mobile.

## 6. Required validation before approval

1. Check changed internal links, canonical tags, sitemap entries and language-switcher destinations.
2. Check the page at desktop and mobile widths in both light and dark appearances where relevant.
3. Check that the protected hero and final logo artwork remain unchanged.
4. Check the WhatsApp form message and Google Maps/Google Reviews destinations without submitting any external form or review.
5. For consent work, test both **Essential only** and **Allow analytics** on English and Afrikaans pages.
6. Write the release result, review URL and remaining approval gate in the handover note.

## 7. Reusable repository resources

Read these documents before a related task:

| Need | Resource |
|---|---|
| Complete local-business site delivery | `skills/caramel-local-business-site-delivery/SKILL.md` |
| Gold Wanted’s implemented component system | `docs/GOLD-WANTED-COMPONENT-BLUEPRINT.md` |
| Asset use and protection | `docs/ASSET-REGISTER.md` |
| Which agent skills and workflows apply | `docs/WORKFLOW-SKILLS.md` |
| Static site maintenance | `skills/gold-wanted-static-maintenance/SKILL.md` |
| Content, local SEO and language changes | `skills/gold-wanted-content-localisation/SKILL.md` |
