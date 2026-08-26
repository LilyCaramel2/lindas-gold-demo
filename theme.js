/* Gold Wanted appearance control: uses final supplied light/dark artwork without altering source image files. */
(function () {
  var key = 'gold-wanted-appearance';
  var root = document.documentElement;
  root.classList.add('js');
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

  function setupMobileNavigation() {
    var header = document.querySelector('.site-header');
    var nav = header && header.querySelector('.main-nav');
    var audio = header && header.querySelector('.audio-guides-link');
    if (!header || !nav || document.querySelector('[data-mobile-nav-toggle]')) return;

    var isAfrikaans = root.lang === 'af';
    var menuText = isAfrikaans ? 'Kieslys' : 'Menu';
    var openLabel = isAfrikaans ? 'Maak navigasie oop' : 'Open navigation';
    var closeLabel = isAfrikaans ? 'Maak navigasie toe' : 'Close navigation';
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'mobile-nav-toggle';
    button.setAttribute('data-mobile-nav-toggle', '');
    button.setAttribute('aria-controls', 'primary-mobile-menu');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', openLabel);
    button.innerHTML = '<span aria-hidden="true" class="mobile-nav-toggle__mark">☰</span><span>' + menuText + '</span>';
    nav.id = 'primary-mobile-menu';
    nav.parentNode.insertBefore(button, nav);

    if (audio && !nav.querySelector('[data-mobile-audio-link]')) {
      var mobileAudio = audio.cloneNode(true);
      mobileAudio.classList.add('main-nav__mobile-audio');
      mobileAudio.setAttribute('data-mobile-audio-link', '');
      mobileAudio.removeAttribute('aria-label');
      mobileAudio.innerHTML = isAfrikaans ? 'Klankgidse' : 'Audio guides';
      nav.appendChild(mobileAudio);
    }

    var media = window.matchMedia('(max-width: 800px)');
    function setOpen(open) {
      nav.classList.toggle('is-mobile-open', open && media.matches);
      button.setAttribute('aria-expanded', open && media.matches ? 'true' : 'false');
      button.setAttribute('aria-label', open && media.matches ? closeLabel : openLabel);
      if (media.matches) nav.setAttribute('aria-hidden', open ? 'false' : 'true');
      else nav.removeAttribute('aria-hidden');
    }
    button.addEventListener('click', function () { setOpen(!nav.classList.contains('is-mobile-open')); });
    if (media.addEventListener) media.addEventListener('change', function () { setOpen(false); });
    else media.addListener(function () { setOpen(false); });
    setOpen(false);
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateButtons();
    setupMobileNavigation();
    document.querySelectorAll('[data-appearance-toggle]').forEach(function (button) {
      button.addEventListener('click', function () {
        root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
        window.localStorage.setItem(key, root.dataset.theme);
        updateButtons();
      });
    });
  });
})();
