/* Gold Wanted cookie-choice control. Analytics remains inactive until a GA4 ID is added and consent is accepted. */
(function () {
  var key = 'gold-wanted-cookie-choice';
  var choice = window.localStorage.getItem(key);

  function store(value) {
    window.localStorage.setItem(key, value);
    document.dispatchEvent(new CustomEvent('goldWantedConsent', { detail: { choice: value } }));
  }

  function close(banner) {
    banner.setAttribute('hidden', '');
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (choice) return;
    var banner = document.createElement('aside');
    banner.className = 'cookie-banner';
    banner.setAttribute('aria-label', 'Cookie choice');
    banner.innerHTML = '<div><p class="service-label">Your website choice</p><p>Gold Wanted saves your screen and cookie choice. Analytics needs your approval.</p><a href="privacy.html#cookies">Read privacy and cookie information</a></div><div class="cookie-actions"><button type="button" class="btn btn-outline btn-cookie" data-cookie-choice="essential">Essential only</button><button type="button" class="btn btn-gold btn-cookie" data-cookie-choice="analytics">Allow analytics</button></div>';
    document.body.appendChild(banner);
    banner.querySelectorAll('[data-cookie-choice]').forEach(function (button) {
      button.addEventListener('click', function () {
        store(button.getAttribute('data-cookie-choice'));
        close(banner);
      });
    });
  });
})();
