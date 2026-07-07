Linda’s Gold – Production HTML/CSS Site
======================================

This repository contains the production website for **Linda’s Gold**, a gold and silver buyer based in Fish Hoek, Cape Town.

The site is built in **plain HTML and CSS**, with a small PHP contact handler.  
It is designed as a clear, inspectable web presence that can also serve as a content and layout seed for future framework-based implementations such as Gaia / Next.js / SOL-001.

Live deployment
---------------

The site is deployed to Vercel from this repository:

`https://lindas-gold-demo.vercel.app/`

Content and structure in this repo mirror what is live, making it straightforward to maintain and to port into other stacks when required.

What the site provides
----------------------

The site is a multi-page brochure and journal for Linda’s Gold, including:

- A home page that explains what Linda buys, how the process works, and how to get in touch.
- An About page with local context and business story.
- A blog called **The Gold & Silver Journal** with four long-form articles:
  - Selling heirloom jewellery while respecting sentimental value.
  - How silver bullion, coins and jewellery are valued.
  - How current gold market trends in 2026 relate to selling decisions.
  - How to clean and store gold and silver jewellery safely.
- A Cartridges page dedicated to ink and toner enquiries as a separate content silo.
- A Contact page with address, hours, contact details and a working form.
- A Privacy & Cookies Policy page tailored to Linda’s Gold.

Pages
-----

`index.html` – Home  
Primary landing page with hero content, what Linda buys, how the process works, areas served, and call-to-action elements.

`about.html` – About  
Provides Linda’s background, trust signals, and details on the types of items she buys.

`cartridges.html` – Ink cartridges  
Information page for local printer ink and toner enquiries, separate from the gold and silver journal.

`blog.html` – Blog / The Gold & Silver Journal  
Blog index introducing four expert articles, each linked to its own dedicated page.

`contact.html` – Contact  
Lists address, hours and contact details, and includes a contact form handled by `contact-handler.php`.

`privacy.html` – Privacy & Cookies Policy  
Describes how Linda’s Gold handles personal information, enquiries and website data.

`selling-your-heirloom-jewellery.html` – Guide  
Explains how to sell heirloom jewellery in Fish Hoek while honouring sentimental value and, when appropriate, keeping stones while selling the metal.

`how-we-value-your-silver.html` – Valuation  
Details how silver bullion, coins and silver jewellery are assessed and valued locally, including purity, weight and market context.

`is-now-a-good-time-to-sell-gold-in-fish-hoek.html` – Market Trends  
Explores how current gold market conditions in 2026 relate to selling gold items in Fish Hoek, and how timing and item type influence decisions.

`how-to-clean-and-store-gold-and-silver-jewellery-safely.html` – Maintenance  
Offers practical guidance on cleaning and storing gold and silver jewellery safely to help avoid tarnish, scratches, moisture damage and everyday wear.

`digital-solutions.html` – Digital Solutions  
Describes digital and online aspects of Linda’s service and outlines future integration points.

Tech stack
----------

- **HTML5** – structured documents and routes.
- **CSS** – single stylesheet (`lindas-gold.css`) controlling layout and visual language.
- **PHP** – minimal `contact-handler.php` for form submissions.
- Hosted on **GitHub**, deployed to **Vercel**.

The current implementation does not require a build step.  
Future frameworks (for example Next.js or Gaia Vedica Akasha SOL-001) can use this repository as a content and routing reference.

Architecture and future migration
---------------------------------

The repository layout is intentionally simple:

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

A separate, private GitHub repository holds the Gaia Vedica Akasha **SOL-001 motherseed**.  
When that stack is ready for use, this repo provides:

- The canonical content source.
- The routing blueprint (URLs and content silos).
- The reference visual language for the Linda’s Gold front-end.

Credits
-------

Concept, content and HTML/CSS structure by **Caramel Digital Studio**.  
Commissioned for **Linda’s Gold**, a gold and silver buyer in Fish Hoek, Cape Town.

This repository keeps the work visible, cloneable, and ready for whatever the next layer of infrastructure needs to do.
