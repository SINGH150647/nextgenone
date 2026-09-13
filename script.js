/* NG One — site interactions (mobile menu only; kept intentionally tiny) */
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('hamburgerBtn');
  var panel = document.getElementById('mobilePanel');
  if (!btn || !panel) return;

  btn.addEventListener('click', function () {
    var isOpen = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  panel.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      panel.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
});
