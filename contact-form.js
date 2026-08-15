/* Gold Wanted static enquiry forms: collect a clear enquiry, then open WhatsApp. */
(function () {
  function clean(value) {
    return String(value || '').trim();
  }

  function buildMessage(data, context) {
    return [
      'Hello Gold Wanted,',
      '',
      'I am contacting you from the ' + context + '.',
      'Name: ' + clean(data.get('name')),
      'Phone: ' + clean(data.get('phone')),
      'Email: ' + clean(data.get('email')),
      'Service: ' + clean(data.get('service')),
      '',
      'Message:',
      clean(data.get('message'))
    ].join('\n');
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-whatsapp-form]').forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        var status = form.querySelector('[data-form-status]');
        var message = buildMessage(new FormData(form), form.getAttribute('data-form-context') || 'website');
        if (status) status.textContent = 'Opening WhatsApp with your message.';
        window.open('https://wa.me/27823727597?text=' + encodeURIComponent(message), '_blank', 'noopener');
      });
    });
  });
})();
