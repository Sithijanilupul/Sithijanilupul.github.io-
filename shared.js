/* shared.js — Sithja Vithanage Portfolio */
(function () {
  const html = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('toggleIcon');
  const saved = localStorage.getItem('sithja-theme') || 'light';
  html.setAttribute('data-theme', saved);
  if (icon) icon.textContent = saved === 'dark' ? '🌙' : '☀️';
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      if (icon) icon.textContent = next === 'dark' ? '🌙' : '☀️';
      localStorage.setItem('sithja-theme', next);
    });
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
