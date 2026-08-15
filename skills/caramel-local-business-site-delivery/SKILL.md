---
name: caramel-local-business-site-delivery
description: Build or substantially refocus a Caramel Digital Studio local-business website from discovery through Lily-approved release. Use for complete brochure, service, content, local-SEO, multilingual, social-repurposing or staged-review work in a client repository.
---

# Caramel Digital Studio local-business site delivery

Use this skill to build a complete local-business site or carry out a substantial refocus. It preserves Lily Godden’s working style: **brand and asset intake first**, then client facts, clear local service positioning, a designed visual system, inspectable components, a staged review branch and no production release without **Lily Godden’s explicit approval**. Lily is the default Caramel project approval and release authority unless she explicitly nominates another person for a specific client.

Read `references/brand-asset-intake-template.md` before any layout or component work. Read `references/client-site-brief-template.md` to structure the client facts. Read `references/delivery-inventory.md` to determine what components and release material a complete site needs. Read `references/caramel-site-blueprint.md` when building the full header, homepage, footer, contact, language, SEO, analytics and content system. Copy `templates/CLIENT-SITE-STRUCTURE.md` into a new repository at discovery to map the complete site before implementation. Each client repository must contain its own `AGENTS.md`, protected-asset register and business-facts reference.

## 1. Brand and asset intake — mandatory before code

Do not start layout, CSS, components or page content until the visual system and asset register exist. The register prevents an AI or developer from losing, renaming, duplicating, resizing or replacing the client’s actual approved images.

1. Start with the **final logo pack**, favicon, palette and typography. Record the exact supplied filenames, approved background context, colour values and display roles. Treat final artwork as protected unless Lily explicitly authorises a replacement.
2. Plan each image before it is generated or added: page or component role, visual subject, target aspect ratio, source dimensions, intended crop behaviour, desktop/mobile placement, text-overlay requirement and alternate text.
3. Record every asset’s filename, extension, source dimensions, aspect ratio, alpha status, origin and approval status. Use `tpt` only for a file with a verified transparent alpha field. Record the originating tool or source, such as `gpt`, `gemini`, supplied client photography or licensed stock.
4. Use a stable descriptive filename convention: `<client>-<role>-<dimensions>-<origin>.<extension>`. Examples: `gold-wanted-home-hero-1600x900-client.png` and `gold-wanted-square-mark-1000x1000-tpt-gpt.png`. Keep approved client filenames unchanged when a supplied pack already has a naming convention.
5. Put the approved register in the repository before implementation. Do not overwrite an asset to make a layout easier. Adjust the layout, update a source reference deliberately, or request a new approved asset.

## 2. Establish the client source of truth

1. Create or update the client brief before changing code. Record business name, owner, services in priority order, stock or booking limits, physical location, contact methods, approved claims, prohibited claims, target localities, languages, **Lily as the default approval authority** and release process. Record a different authority only when Lily explicitly appoints one.
2. Treat supplied logos, hero photography, audio, copy and reviewed translations as protected unless Lily explicitly permits alteration.
3. Create a root `AGENTS.md` that states the branch gate, stack constraint, facts, language rules, protected assets, visual system and required validation.
4. Ask only for information that blocks safe progress. Proceed with clearly labelled assumptions where the client has already supplied enough direction.

## 3. Choose the architecture and component map

Use the lightest implementation that meets the current project requirement. Preserve plain HTML/CSS sites when the client needs inspectable GitHub files and no build step. Do not convert a static site to a framework merely to make it look modern.

Map reusable components before page work: header, **clear logo lock-up**, navigation, language switcher, appearance control, audio-guides control, full-page hero, service card, CTA, enquiry route, home-page form, contact-page form, location and embedded map, genuine review route, Journal card, article template, audio player, footer, cookie choice, privacy page, sitemap, robots, web manifest and 404 route. Reuse existing components and shared styling; do not duplicate markup and CSS by default.

Treat future framework or Gaia/Lotus migration as a later mapping exercise. Keep the static site a clean content, route and component reference until an architecture change has explicit approval.

## 4. Build the content and language system

Write in clear, human UK/SA English unless the client brief says otherwise. Use short, concrete ASD-STE100-style sentences with Zinsser’s simplicity, brevity, clarity and humanity. Remove generic AI markers, forced contrast formulas, unsupported marketing claims, fake review language and invented data.

For every service, document what the business does, does not do, where it serves, what a visitor should bring or send, and the honest next action. Put the primary local service first; place secondary services clearly without losing them.

For each public page or article, define a unique natural local keyword focus, title, description, canonical URL, heading and matching image. Do not invent search volume or keyword difficulty. Reuse an article’s matching visual in its social and Google Business Profile adaptation.

Use separate reviewed language routes rather than partial machine translation. Keep language switchers, title, description, canonical, `hreflang`, contact prompt, consent wording and audio labels aligned. Do not publish a language without appropriate native-speaker review.

## 5. Build the visual and conversion system

Choose a deliberate visual direction before implementation. Define the colour roles, typography, layout paradigm, signature motifs, image strategy and light/dark appearance. A Caramel local-business home page uses an immediately visible, legible brand header and a **full-screen, image-led hero** with a clear local service proposition, one primary conversion action and one practical secondary action. Write a short style reminder at the top of any CSS or component file changed.

Treat text-on-image contrast as a design requirement. Analyse whether a background is light or dark, then use appropriate text and an overlay or reading surface that works with the actual image. Do not hide a protected hero subject to solve contrast. In light mode, avoid a flat, pale interface: retain photographs, deliberate navy anchors and strong readable hierarchy.

Every prominent CTA must serve a real path: WhatsApp, phone, enquiry form, directions, booking or approved review route. Put a contact conversion section with an enquiry form and honest review route on the homepage when the service merits it. Give the dedicated contact page a complete contact form, clear visit details and an embedded map or directions route. Do not add decorative controls without a useful function. Preserve accessible focus, usable touch targets, semantic headings, useful alt text, form labels and reduced-motion respect.

## 6. Complete the local-business essentials

Implement only the essentials that are truthful and ready:

1. Accurate address, phone, opening information and directions.
2. Maps embed or directions route, if approved.
3. Genuine Google Business Profile or review-listing route. Never fabricate reviews, ratings or testimonials.
4. Contact route with clear user-controlled submission behaviour.
5. Privacy and cookie information, a storage-safe choice control and consent-aware analytics. Do not activate GA4 until a Measurement ID is supplied.
6. Canonical tags, Open Graph tags, sitemap, robots, web manifest, 404 route and LocalBusiness schema where facts are confirmed.
7. Light/dark appearance that changes the page system, not merely its background. Keep the logo clear in its intended context, photographs visible, text contrast reliable and theme choice remembered.
8. UTM convention for social and Google Business Profile links where channels are active.

## 7. Prepare content distribution

For each approved guide, prepare a matching blog route, image, audio option where appropriate, Facebook post, community-group adaptation and Google Business Profile post. Keep a planner containing the publication date, URL, UTM link, unique primary keyword, matching image, CTA and conservative non-duplicated hashtags.

Do not automate posts, publish reviews, spend money or send messages without explicit user confirmation. Keep all community copy local, practical and direct.

## 8. Validate, review and release

1. Test all changed paths at desktop, tablet and mobile sizes. Test both appearances and all completed languages.
2. Test links, forms, maps, audio, language routing, consent controls, accessibility basics, canonical and sitemap coverage.
3. Validate that protected assets are unchanged and the client’s business rules still hold.
4. Commit small, descriptive changes to a review branch. Provide a durable review URL where possible and a concise handover explaining what changed, what requires client input and what has not been activated.
5. Obtain Lily’s explicit approval for the specific release. Only then merge to the production branch, verify live routes and report the commit and final checks. Ask a direct client only when Lily has explicitly made that client the approval authority for the release.

## Non-negotiable safeguards

Never expose credentials or private client data. Never claim availability, service capability, language review, analytics activity or customer evidence that has not been confirmed. Never replace final client artwork or a protected hero asset without Lily’s explicit approval. Never merge `main` merely because a review branch looks finished.
