(function () {
  var measurementId = window.GOLD_WANTED_GA4_MEASUREMENT_ID;
  var dataLayer = window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }

  if (measurementId && /^G-[A-Z0-9]+$/i.test(measurementId)) {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
    document.head.appendChild(script);
    gtag("js", new Date());
    gtag("config", measurementId, { anonymize_ip: true });
  }

  window.goldWantedAnalytics = {
    event: function (eventName, parameters) {
      var payload = Object.assign({ page_path: window.location.pathname }, parameters || {});
      if (measurementId && typeof window.gtag === "function") {
        window.gtag("event", eventName, payload);
      } else {
        gtag("event", eventName, payload);
      }
      window.dispatchEvent(new CustomEvent("gold-wanted:analytics", { detail: { event: eventName, parameters: payload } }));
    }
  };

  document.addEventListener("click", function (event) {
    var link = event.target.closest("[data-track]");
    var target = link || event.target.closest("a");
    if (!target) return;
    var href = target.href || "";
    var eventName = target.dataset.track || "";
    if (!eventName && /wa\.me\//i.test(href)) eventName = "whatsapp_click";
    if (!eventName && /facebook\.com\//i.test(href)) eventName = "facebook_click";
    if (!eventName && /google\.com\/maps/i.test(href)) eventName = "google_listing_click";
    if (!eventName && target.classList.contains("btn")) eventName = "cta_click";
    if (eventName) window.goldWantedAnalytics.event(eventName, { link_url: href, link_text: (target.textContent || "").trim().slice(0, 100) });
  });
})();
