# GA4 measurement status

**Measurement ID:** `G-N67SRPL2BS`  
**Status:** Active after deployment to `main`.

The site uses `cookie-consent.js` as the consent gate. It reads the stored `gold-wanted-cookie-choice` value and listens for the `goldWantedConsent` event. With **Essential only**, the site does not load Google’s `gtag.js` file and does not create `window.gtag`. With **Allow analytics**, it loads GA4 and queues the configuration for the measurement ID.

Only these non-personal events are recorded: `whatsapp_enquiry`, `directions_click`, `contact_form_submit`, `audio_play` and `language_switch`. Do not add names, phone numbers, email addresses, printer models, free-text messages or jewellery details to GA4 event parameters.

Before a future consent or analytics change, test both choices on one English and one Afrikaans route. Check that Essential only leaves no `googletagmanager.com/gtag/js` script tag or `window.gtag` on the page.
