# Gold Wanted component blueprint

This document records the **actual implemented Gold Wanted site system**. It exists so future agents can preserve all of Lily’s components and working patterns rather than reducing the website to an HTML/CSS shell.

## Complete site shell

| Component | Gold Wanted implementation |
|---|---|
| Header | Sticky navy header with the final supplied logo lock-up, Home, Ink & Toner, Sell Jewellery, Journal and Find Us navigation. The clear logo uses the matching supplied dark/light artwork rather than a redrawn brand mark. |
| Utility group | English/Afrikaans switcher on the completed bilingual core pages, **Audio Guides** link and a working light/dark appearance toggle. |
| Appearance system | `theme.js` remembers the preference where storage permits and swaps theme-specific favicon/logo references. `lindas-gold.css` provides a navy dark stage and a deliberately designed warm-paper light mode with visible imagery. |
| Footer | Supplied final logo lock-up, service statement, exploration links, location context and Privacy & Cookies route. |
| Cookie choice | `cookie-consent.js` creates a storage-safe Essential/Analytics banner in English or Afrikaans. Both choices dismiss the banner even when a browser restricts persistent storage. |

## Homepage conversion structure

| Section | Gold Wanted implementation |
|---|---|
| Protected hero | Full-page `gw-home-hero-1600x900.png` showing Linda, blonde and viewed from behind, serving an African customer. The hero contains Fish Hoek location context, ink-first H1, direct WhatsApp CTA, Find Us CTA and a useful Triangle Square location card. |
| Service hierarchy | “Ink cartridges, refills & toner” is visually first. “Sell gold & silver jewellery” is second. |
| Practical service help | Photo split with three steps: photograph the cartridge label, WhatsApp the make/model and ask about availability/collection/next option. |
| Local service band | Audience tags for offices, shops, restaurants, small businesses, home offices and community groups, plus Fish Hoek/behind-Shoprite practical location language. |
| Team section | Linda and Brendan as the local Gold Wanted team with route to Find Us. |
| Journal preview | Three image-led current guide cards and route to all eight guides. |
| Home conversion section | Real WhatsApp action, Find Us action, honest Google listing card and a complete WhatsApp enquiry form. |

## Contact, map, form and reviews

| Component | Implementation |
|---|---|
| Forms | Home, English contact, Afrikaans home and Afrikaans contact forms use `data-whatsapp-form`. Fields are name, phone, email, service and message. `contact-form.js` validates them, builds an English/Afrikaans message and opens a user-controlled `wa.me` WhatsApp message. |
| Contact page | Complete visit details, call and WhatsApp routes, enquiry form, Google Maps embed and external directions route. |
| Map | `map-embed` uses the Triangle Square Google Maps embed with a descriptive title. |
| Reviews | `reviews-link-card` directs visitors to the genuine Google search/listing route. No ratings, testimonials or review wording are fabricated. |

## Service, Journal and audio library

| Area | Implementation |
|---|---|
| Ink & Toner page | Confirmed Canon, HP, Brother, Lexmark and Samsung coverage. It uses “Ask us to check availability,” never a stock promise. |
| Jewellery guidance | Clear limits: jewellery and selected household silver; no Kruger Rands or coins; seller needs ID/passport; stones returned where possible. |
| Journal | Four ink guides and four jewellery guides use matched images, local topic focus, article templates and links back to contact/service routes. |
| Audio | Eight English narrated episodes, dedicated `podcasts.html`, article-level players, and a short approved Afrikaans contact audio guide. |

## Languages

The English site is default. The approved Afrikaans routes are `/af/index.html`, `/af/cartridges.html`, `/af/contact.html` and `/af/audio.html`. Each contains a language switcher, reviewed `inkpatroon` terminology, matching relative shared assets, language-aware WhatsApp messages, consent text and applicable audio. IsiXhosa, isiZulu and Sesotho remain unpublished until native-speaker review.

## Search, privacy and analytics readiness

| System | Gold Wanted implementation |
|---|---|
| Search | Per-page title/description/canonical/Open Graph foundations, LocalBusiness JSON-LD on the homepage, `sitemap.xml`, `robots.txt`, web manifest, 404 route and English/Afrikaans `hreflang` entries for completed equivalents. |
| Privacy | `privacy.html` explains WhatsApp, Maps, reviews, appearance/cookie preferences and future analytics. |
| Analytics | Consent architecture is ready, but no GA4 Measurement ID has been supplied or installed. There is no analytics data to report until that client input exists. |
| UTM and social | An eight-post content, Facebook and Google Business Profile plan exists. Apply UTM links once the Facebook Page URL and final posting route are supplied. |

## Delivery rule

The site is plain HTML5, shared CSS and vanilla JavaScript. Work on a review branch. **Do not change `main` without Lily Godden’s explicit approval.** Lily is the default release authority for this Caramel-managed project unless she explicitly appoints another person.
