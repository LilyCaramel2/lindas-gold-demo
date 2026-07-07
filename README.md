Linda’s Gold – Production HTML/CSS Site
======================================

This repository contains the production website for **Linda’s Gold**, a gold and silver buyer based in Fish Hoek, Cape Town.

It is deliberately built in **plain HTML and CSS**, with a small PHP contact handler, as a clean, inspectable mother-site that can be cloned into a SaaS or Next.js stack later without losing content quality or structure.

No demo. This is a real site, on a real domain, for a real business.

Why this repo exists
--------------------

Most SaaS front-ends start life as rushed React or Next.js projects with placeholder content.  
This project takes the opposite approach:

- A fully structured multi-page HTML/CSS site that answers real questions customers have.
- Clear URLs and content silos that can be mirrored in any future framework.
- A reference implementation that survives long after tools and frameworks change.

Later, this site can be lifted into a Gaia / Next.js / SOL-001 stack.  
Right now, it stands on its own as a production site.

Live deployment
---------------

Deployed as a static site to Vercel from this repo:

`https://lindas-gold-demo.vercel.app/`

When the Gaia Vedica Akasha SOL-001 stack is brought online, this repo becomes the **content and layout seed** for the new front-end, not a throwaway prototype.

What the site covers
--------------------

It is not “just a landing page”.

The site includes:

- A full home page explaining what Linda buys, how the process works, and how to contact her.
- An About page with local context and story.
- A Blog called **The Gold & Silver Journal** with four long-form articles:
  - Selling heirloom jewellery without losing sentimental value.
  - How silver bullion, coins and jewellery are valued.
  - Whether now is a good time to sell gold, using 2026 market trends.
  - How to clean and store gold and silver jewellery safely.
- A Cartridges page for ink and toner enquiries (separate silo, not mixed into the journal).
- A Contact page with address, hours, and a working form handler.
- A Privacy & Cookies Policy tailored to a local gold buyer.

This is the kind of content most SaaS dashboards and SME sites never get around to writing.

Pages
-----

`index.html` – Home  
Primary landing page: hero, what Linda buys, how it works, local areas served, and a contact path.

`about.html` – About  
Linda’s story, trust signals, and details on the types of items she buys.

`cartridges.html` – Ink cartridges  
Side page for local printer ink and toner enquiries, separate from the precious-metals journal.

`blog.html` – Blog / The Gold & Silver Journal  
Blog index that introduces four expert articles, each with its own page.

`contact.html` – Contact  
Address, hours, contact details, and a simple contact form handled by `contact-handler.php`.

`privacy.html` – Privacy & Cookies Policy  
Explains how Linda’s Gold handles personal information, enquiries and website data.

`selling-your-heirloom-jewellery.html` – Guide  
How to sell heirloom jewellery in Fish Hoek while honouring sentimental value and, where possible, keeping stones while selling the metal.

`how-we-value-your-silver.html` – Valuation  
How silver bullion, coins and silver jewellery are assessed and valued locally, including purity, weight, and market context.

`is-now-a-good-time-to-sell-gold-in-fish-hoek.html` – Market Trends  
Explores whether current gold market conditions in 2026 make it a good time to sell gold items, and how timing and item type influence the decision.

`how-to-clean-and-store-gold-and-silver-jewellery-safely.html` – Maintenance  
Practical care guide for cleaning and storing gold and silver jewellery safely to avoid tarnish, scratches, moisture damage and everyday wear.

`digital-solutions.html` – Digital Solutions  
Additional page describing digital/online aspects of Linda’s service and future integration points.

Tech stack
----------

- **HTML5** – no framework abstractions, just documents and routes.
- **CSS** – single stylesheet (`lindas-gold.css`) controlling layout and visual language.
- **PHP** – minimal `contact-handler.php` for form submissions.
- Hosted on **GitHub**, deployed to **Vercel**.

No build step is required for the current site.  
Next.js or any other framework can be introduced later, using this repo as the content and route map.

Architecture and future migration
---------------------------------

This repo is intentionally simple:

```txt
lindas-gold-demo/
├── index.html
├── about.html
├── cartridges.html
├── blog.html
├── contact.html
├── privacy.html
├── selling-your-heirloom-jewellery.html
├── how-we-value-your-silver.html
├── is-now-a-good-time-to-sell-gold-in-fish-hoek.html
├── how-to-clean-and-store-gold-and-silver-jewellery-safely.html
├── digital-solutions.html
├── lindas-gold.css
├── contact-handler.php
├── robots.txt
├── sitemap.xml
└── images/
```

The heavier Gaia Vedica Akasha **SOL-001 motherseed** exists in a separate private GitHub account for safety.  
When that stack is ready to surface to end-users, this repo becomes:

- The canonical content source.
- The routing blueprint (URLs and silos).
- The reference visual language for the Linda’s Gold front-end.

Until then, this HTML/CSS site gives Linda something most SaaS products never get:  
a fully written, structured, trustworthy web presence that can stand alone.

Credits
-------

Concept, content and HTML/CSS structure by **Caramel Digital Studio**.  
Commissioned for **Linda’s Gold**, a gold and silver buyer in Fish Hoek, Cape Town.

This repo exists so that the work is visible, cloneable, and ready for whatever the next layer of infrastructure needs to do.
