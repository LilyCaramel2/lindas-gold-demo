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

  document.addEventListener('DOMContentLoaded', function () {
    updateButtons();
    document.querySelectorAll('[data-appearance-toggle]').forEach(function (button) {
      button.addEventListener('click', function () {
        root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
        window.localStorage.setItem(key, root.dataset.theme);
        updateButtons();
      });
    });
  });
})();
