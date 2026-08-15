/* Gold Wanted privacy control: GA4 starts only after Analytics consent; record useful actions, never enquiry content. */
(function () {
  var key = 'gold-wanted-cookie-choice';
  var measurementId = 'G-N67SRPL2BS';
  var choice = readChoice();
  var analyticsStarted = false;

  function readChoice() {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function store(value) {
    choice = value;
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // The current-page choice still works when browser storage is restricted.
    }
    document.dispatchEvent(new CustomEvent('goldWantedConsent', { detail: { choice: value } }));
  }

  function close(banner) {
    banner.setAttribute('hidden', '');
  }

  function track(eventName, parameters) {
    if (analyticsStarted && typeof window.gtag === 'function') {
      window.gtag('event', eventName, parameters || {});
    }
  }

  function registerUsefulActions() {
    document.addEventListener('click', function (event) {
      var link = event.target.closest('a');
      if (!link) return;
      var href = link.getAttribute('href') || '';
      if (href.indexOf('wa.me/') !== -1) {
        track('whatsapp_enquiry', { page_path: window.location.pathname });
      } else if ((href.indexOf('google.com/maps') !== -1 || href.indexOf('maps.google.com') !== -1) && (href.indexOf('Triangle+Square') !== -1 || /direction|aanwysing/i.test(link.textContent || ''))) {
        track('directions_click', { page_path: window.location.pathname });
      } else if (link.closest('.language-switcher')) {
        track('language_switch', { language: link.lang || 'unknown' });
      }
    });

    document.addEventListener('submit', function (event) {
      if (event.target.matches('[data-whatsapp-form]')) {
        track('contact_form_submit', { page_path: window.location.pathname });
      }
    });

    document.querySelectorAll('audio').forEach(function (audio) {
      audio.addEventListener('play', function () {
        track('audio_play', { page_path: window.location.pathname });
      }, { once: true });
    });
  }

  function startAnalytics() {
    if (analyticsStarted) return;
    analyticsStarted = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(script);
    registerUsefulActions();
  }

  document.addEventListener('goldWantedConsent', function (event) {
    if (event.detail && event.detail.choice === 'analytics') startAnalytics();
  });

  document.addEventListener('DOMContentLoaded', function () {
    if (choice === 'analytics') startAnalytics();
    if (choice) return;
    var afrikaans = document.documentElement.lang === 'af';
    var prefix = document.documentElement.dataset.assetPrefix || '';
    var banner = document.createElement('aside');
    banner.className = 'cookie-banner';
    banner.setAttribute('aria-label', afrikaans ? 'Koekiekeuse' : 'Cookie choice');
    banner.innerHTML = afrikaans
      ? '<div><p class="service-label">Jou webwerfkeuse</p><p>Gold Wanted stoor jou skerm- en koekiekeuse. Analytics benodig jou toestemming.</p><a href="' + prefix + 'privacy.html#cookies">Lees privaatheid- en koekie-inligting</a></div><div class="cookie-actions"><button type="button" class="btn btn-outline btn-cookie" data-cookie-choice="essential">Slegs noodsaaklik</button><button type="button" class="btn btn-gold btn-cookie" data-cookie-choice="analytics">Laat analytics toe</button></div>'
      : '<div><p class="service-label">Your website choice</p><p>Gold Wanted saves your screen and cookie choice. Analytics needs your approval.</p><a href="privacy.html#cookies">Read privacy and cookie information</a></div><div class="cookie-actions"><button type="button" class="btn btn-outline btn-cookie" data-cookie-choice="essential">Essential only</button><button type="button" class="btn btn-gold btn-cookie" data-cookie-choice="analytics">Allow analytics</button></div>';
    document.body.appendChild(banner);
    banner.querySelectorAll('[data-cookie-choice]').forEach(function (button) {
      button.addEventListener('click', function () {
        store(button.getAttribute('data-cookie-choice'));
        close(banner);
      });
    });
  });
})();
