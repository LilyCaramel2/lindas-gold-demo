# GA4 measurement status

**Measurement ID:** **Not set**
**Status:** **Prepared and inactive.** Do not use the earlier account or its Measurement ID.

The public site contains `analytics-config.js`, but the file deliberately leaves `window.GOLD_WANTED_GA4_MEASUREMENT_ID` blank. `analytics-events.js` loads Google’s tag only when both conditions are true: a valid owner-supplied `G-...` Measurement ID exists and the visitor has selected **Allow analytics**. With **Essential only**, analytics loading and event delivery remain inactive.

The current provider-neutral event layer may record these non-personal interactions after consent: declared `data-track` events, WhatsApp links, Facebook links, Google Maps/listing links, button CTAs, plus form-start and form-submit events. Do **not** add names, phone numbers, email addresses, printer models, free-text messages, jewellery details or other enquiry content as GA4 parameters.

## Correct-account activation

Use **Linda’s `cartridgecaregp@gmail.com` Google account** or an owner-approved account with the required property access. In Google Analytics, create or select the Gold Wanted GA4 property, open its **Web data stream**, and copy the Measurement ID beginning `G-`. Google states that finding a Measurement ID requires Editor or higher property access. [1]

Place the confirmed ID in `analytics-config.js` only, deploy it, then test both consent choices on one English and one Afrikaans page. Under **Essential only**, the page should have no `googletagmanager.com/gtag/js` script. Under **Allow analytics**, check GA4 DebugView or Realtime and click a harmless test route such as the Facebook footer link or Menu control.

## References

[1] [Google Analytics Help — Measurement ID](https://support.google.com/analytics/answer/12270356?hl=en)
