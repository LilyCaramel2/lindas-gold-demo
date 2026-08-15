/* Gold Wanted appearance control: uses final supplied light/dark artwork without altering source image files. */
(function () {
  var key = 'gold-wanted-appearance';
  var root = document.documentElement;
  var saved = window.localStorage.getItem(key);
  var preview = new URLSearchParams(window.location.search).get('appearance');
  var systemLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  root.dataset.theme = preview === 'light' || preview === 'dark'
    ? preview
    : (saved || (systemLight ? 'light' : 'dark'));

  function labelFor(theme) {
    if (root.lang === 'af') {
      return theme === 'light' ? 'Gebruik donker skerm' : 'Gebruik ligte skerm';
    }
    return theme === 'light' ? 'Use dark screen' : 'Use light screen';
  }

  function updateButtons() {
    var theme = root.dataset.theme || 'dark';
    document.querySelectorAll('[data-appearance-toggle]').forEach(function (button) {
      button.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
      button.setAttribute('aria-label', labelFor(theme));
      button.querySelector('[data-appearance-label]').textContent = labelFor(theme);
    });
    document.querySelectorAll('link[rel~="icon"]').forEach(function (icon) {
      var prefix = root.dataset.assetPrefix || '';
      icon.href = theme === 'light'
        ? prefix + 'images/brand/gw-favicon-lightbg-tpt-gptpng.png'
        : prefix + 'images/brand/gw-favicon-darkbg-gpt.png';
    });
  }

  function initialiseMobileMenu() {
    var header = document.querySelector('.site-header');
    var bar = header && header.querySelector('.nav-bar');
    var navigation = bar && bar.querySelector('.main-nav');
    var language = bar && bar.querySelector('.language-switcher');
    var audio = bar && bar.querySelector('.audio-guides-link');
    var appearance = bar && bar.querySelector('[data-appearance-toggle]');
    if (!bar || !navigation || !language || !audio || !appearance || bar.querySelector('[data-mobile-menu-toggle]')) return;

    var menuId = 'gold-wanted-mobile-menu';
    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'mobile-nav-toggle';
    toggle.setAttribute('data-mobile-menu-toggle', '');
    toggle.setAttribute('aria-controls', menuId);
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span aria-hidden="true" class="mobile-nav-toggle__icon">☰</span><span>Menu</span>';

    var panel = document.createElement('div');
    panel.className = 'mobile-nav-panel';
    panel.id = menuId;
    panel.hidden = true;
    panel.append(navigation, language, audio, appearance);
    bar.append(toggle, panel);

    function isMobile() {
      return window.matchMedia('(max-width: 620px)').matches;
    }

    function closeMenu() {
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }

    function syncMenuMode() {
      if (isMobile()) {
        closeMenu();
      } else {
        panel.hidden = false;
        toggle.setAttribute('aria-expanded', 'false');
      }
    }

    toggle.addEventListener('click', function () {
      if (!isMobile()) return;
      var nextOpen = panel.hidden;
      panel.hidden = !nextOpen;
      toggle.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isMobile() && !panel.hidden) {
        closeMenu();
        toggle.focus();
      }
    });

    window.addEventListener('resize', syncMenuMode);
    syncMenuMode();
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateButtons();
    document.querySelectorAll('[data-appearance-toggle]').forEach(function (button) {
      button.addEventListener('click', function () {
        root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
        window.localStorage.setItem(key, root.dataset.theme);
        updateButtons();
      });
    });
    initialiseMobileMenu();
  });
})();
