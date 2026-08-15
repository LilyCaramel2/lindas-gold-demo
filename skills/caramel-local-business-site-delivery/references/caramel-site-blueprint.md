# Caramel local-business site blueprint

This is the **implementation reference**, not a loose checklist. Apply the relevant parts when a client needs a complete local-business website. Gold Wanted is the working reference; replace its facts and visual system with the client’s approved brief.

## 1. Brand and asset foundation before a single component

Begin with the final logo pack, favicon, palette, type and planned photography. Create the client asset register first. It must record original filename, role, source dimensions, aspect ratio, alpha status, AI/source (`gpt`, `gemini`, client, stock or named photographer), intended crop, approved background and protection status.

Use client-supplied final names unchanged. For new assets use `<client>-<role>-<dimensions>-<alpha-if-transparent>-<origin>.<extension>`. Verify rather than assume transparency; use `tpt` only when the image has a real alpha channel. Do not resize, crop, recolour or regenerate a protected source file. Adapt CSS placement instead.

## 2. Site shell: the first screen must feel designed

| Component | Required Caramel treatment |
|---|---|
| Header | A clear, generous logo lock-up in the correct dark or light artwork. Keep the brand readable, not a tiny decorative speck. Use visible primary navigation. On mobile, reflow into deliberate touch targets rather than hiding essential routes. |
| Utility controls | Treat light/dark appearance, language and audio controls as a visible functional group beside the navigation. Each must work, have an accessible label and retain its setting where storage permits. |
| Light/dark design | Dark mode uses the client’s deep brand stage, light text and controlled accent. Light mode is a designed paper or silver-white surface with photographs, dark anchors and strong readable hierarchy; it is not a washed-out inversion. Use the theme-specific supplied logo. |
| Footer | Repeat the legible logo lock-up, concise local-service statement, discovery links, exact location, privacy/cookie route and legal/local identity. The footer is a conversion and trust component, not an afterthought. |
| Cookie choice | Use an accessible bottom banner with Essential and Analytics choices, a privacy link and storage-safe dismissal. Do not load GA4 before a Measurement ID exists and the visitor has opted into analytics. |

## 3. Homepage structure: a conversion journey, not a brochure wall

Build the home page in this order. Keep the primary service first and secondary services visible but clearly subordinate.

| Section | Purpose and required elements |
|---|---|
| Full-page hero | Use an approved 16:9 or equivalent client hero image at near-viewport height. Keep people and key context visible. Place a clear location eyebrow, concise service-first H1, supporting paragraph, primary CTA and practical secondary CTA. Use an image-aware overlay or warm-paper/glass reading field for contrast; never cover or crop away a protected hero subject. |
| Immediate visit marker | Add a useful location card or route within the hero when a physical shop matters. It must link to contact/directions; do not use a floating logo as decoration. |
| Service hierarchy | Present the priority service first, then secondary service(s), using uneven visual weight that matches commercial priority. State real limitations rather than making generic promises. |
| Practical help split | Use an image plus clear steps to show the visitor exactly what to send, bring or do. This is where a service photo, product label request, booking preparation or eligibility process lives. |
| Local business band | Explain why the local option is practical, using real place context and audience segments. Avoid empty “community” slogans. |
| Team or trust section | Introduce the real local team and show the next practical action. Do not invent credentials or testimonials. |
| Journal preview | Use image-led cards with different visuals for different guides. Each card carries topic, local intent and an article CTA. |
| Contact conversion | Put one complete home-page enquiry form beside contact guidance, a real WhatsApp/phone action and an honest Google review-listing route. |

## 4. Contact and local conversion system

| Component | Required behaviour |
|---|---|
| Home-page form | Collect name, phone, email, service and message. Validate required fields. Explain exactly what happens on submit. For a static site, open a user-controlled WhatsApp message containing the form data; do not pretend it sends email automatically. |
| Contact-page form | Include the same complete enquiry path, tailored to the contact page’s context and language. Keep it separate from the home form rather than making the contact page a dead-end. |
| Direct contact actions | Use `tel:` for calls and click-to-WhatsApp with a context-appropriate prefilled prompt. Keep address and opening information clear. |
| Map and directions | Use an accessible Google Maps embed with a descriptive title on the dedicated contact page, plus an external directions link. Check both after every address change. |
| Reviews | Use an honest card linking to the client’s real Google listing. Do not invent a rating, quote, paraphrase or seed reviews. |

## 5. Service, Journal and audio system

| Route pattern | Required content |
|---|---|
| Priority service page | Detail confirmed services, brands/categories, questions to ask before visiting and availability/booking language. Keep no-stock-promise wording where stock is variable. |
| Secondary service page | Explain what the business accepts, exclusions, identification or preparation and a direct contact route. Keep safety and compliance facts specific. |
| Journal index | A clear editorial hero and image-led card library. Use one matching image per guide; do not reuse a generic image across unrelated articles. |
| Article template | Topic tag, single H1, clear introduction, matched hero image, plain helpful sections, relevant CTA, article audio link/player and routes back to the service/contact journey. |
| Audio library | A dedicated Audio Guides route plus article-level players. Record language, title, source script and linked page. Do not add audio only as a decorative feature. |

## 6. Languages and terminology

Use a clear language switcher only on pages with complete reviewed equivalents. A language is not “done” until its route, title, description, canonical URL, `hreflang`, body copy, contact prompt, cookie wording, form message and audio label agree.

Retain English as the default where appropriate. Record the named reviewer and approved terminology for every published language. Hold unreviewed languages back rather than exposing half-translated controls. On a static project, use a visible directory route such as `/af/` and correct relative asset paths.

## 7. Search, sharing, measurement and compliance

| System | Required implementation |
|---|---|
| Page SEO | One natural primary local focus per public page/guide; title, description, H1, body, image and CTA that naturally support it. Do not invent search-volume or difficulty numbers. |
| Technical SEO | Per-page canonical, Open Graph data, useful social image, sitemap, robots, 404, manifest and accurate LocalBusiness schema. Update all of them when a public route is added or moved. |
| Analytics | Keep a GA4 Measurement ID as an explicit client input. Install consent-aware analytics only after the ID is supplied and consent logic is verified. Report readiness separately from live data. |
| UTM links | Define a consistent `utm_source`, `utm_medium` and `utm_campaign` convention before Facebook, community or Google Business Profile posts go live. |
| Privacy | Publish a readable privacy/cookie route covering forms, WhatsApp, Maps, reviews, appearance preferences and future analytics. Update it when services change. |

## 8. Social, GMB and content distribution

For each Journal guide, produce the linked web article, matching image, Facebook version, community-group version and Google Business Profile post. The GMB format should be practical: an emoji-led header, one problem/solution paragraph, short spaced action list and direct CTA. Use one distinct keyword focus and controlled non-duplicated hashtags. Do not post, pay for ads or submit content without user confirmation.

## 9. Delivery and review loop

1. Test desktop, tablet and mobile. Check dark/light appearance, all completed languages, header/footer, hero contrast, CTAs, forms, maps, reviews, audio, internal routes, sitemap, canonicals, schema and consent.
2. Create a clean review branch and durable preview. Give Lily a concise handover explaining how to inspect the theme toggle, languages, audio, Journal and key conversion paths. Share a client preview only when Lily decides it is useful.
3. Prepare a handover covering implemented components, supplied assets, analytics status, social content, outstanding client inputs and the approval gate.
4. Merge to production only after Lily’s explicit approval. Verify public routes and then report the commit and release result. Use a direct client approval gate only when Lily has explicitly assigned it.
