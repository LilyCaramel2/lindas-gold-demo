/* Gold Wanted cookie-choice control. Analytics remains inactive until a GA4 ID is added and consent is accepted. */
(function () {
  'use strict';

  var key = 'gold-wanted-cookie-choice';
  var bannerId = 'gold-wanted-cookie-banner';
  var visitChoice = '';

  function getStoredChoice() {
    try {
      return window.localStorage.getItem(key) || '';
    } catch (error) {
      return visitChoice;
    }
  }

  function saveChoice(value) {
    visitChoice = value;
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      /* Some privacy settings block local storage. The selection still works for this visit. */
    }
    document.documentElement.dataset.cookieChoice = value;
    document.dispatchEvent(new CustomEvent('goldWantedConsent', { detail: { choice: value } }));
  }

  function closeBanner(banner) {
    if (!banner) return;
    banner.setAttribute('hidden', '');
    banner.remove();
  }

  function createBanner() {
    if (getStoredChoice() || document.getElementById(bannerId)) return;

    var afrikaans = document.documentElement.lang === 'af';
    var prefix = document.documentElement.dataset.assetPrefix || '';
    var banner = document.createElement('aside');
    banner.id = bannerId;
    banner.className = 'cookie-banner';
    banner.setAttribute('aria-label', afrikaans ? 'Koekiekeuse' : 'Cookie choice');
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.innerHTML = afrikaans
      ? '<div class="cookie-content"><p class="service-label">Jou webwerfkeuse</p><p>Gold Wanted stoor jou skerm- en koekiekeuse. Analytics benodig jou toestemming.</p><a href="' + prefix + 'privacy.html#cookies">Lees privaatheid- en koekie-inligting</a></div><div class="cookie-actions"><button type="button" class="btn btn-outline btn-cookie" data-cookie-choice="essential">Slegs noodsaaklik</button><button type="button" class="btn btn-gold btn-cookie" data-cookie-choice="analytics">Laat analytics toe</button></div>'
      : '<div class="cookie-content"><p class="service-label">Your website choice</p><p>Gold Wanted saves your screen and cookie choice. Analytics needs your approval.</p><a href="privacy.html#cookies">Read privacy and cookie information</a></div><div class="cookie-actions"><button type="button" class="btn btn-outline btn-cookie" data-cookie-choice="essential">Essential only</button><button type="button" class="btn btn-gold btn-cookie" data-cookie-choice="analytics">Allow analytics</button></div>';

    document.body.appendChild(banner);
    banner.addEventListener('click', function (event) {
      var button = event.target.closest('[data-cookie-choice]');
      if (!button || !banner.contains(button)) return;
      event.preventDefault();
      saveChoice(button.getAttribute('data-cookie-choice'));
      closeBanner(banner);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBanner, { once: true });
  } else {
    createBanner();
  }
})();
