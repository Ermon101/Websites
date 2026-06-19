/* ============================================================
   STUDIO MERON — Main JS
   ============================================================ */

/* ── Nav active state ──────────────────────────────────────── */
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('is-active');
    }
  });
})();

/* ── Mobile nav toggle ─────────────────────────────────────── */
(function () {
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  document.querySelectorAll('.nav-mobile a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      toggle.classList.remove('is-open');
    });
  });
})();

/* ── Tabs ──────────────────────────────────────────────────── */
(function () {
  document.querySelectorAll('.tabs__nav').forEach(nav => {
    const btns   = nav.querySelectorAll('.tab-btn');
    const parent = nav.closest('[data-tabs]') || nav.parentElement;
    const panels = parent.querySelectorAll('.tab-panel');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        btns.forEach(b   => b.classList.remove('is-active'));
        panels.forEach(p => p.classList.remove('is-active'));

        btn.classList.add('is-active');
        const panel = parent.querySelector(`#tab-${target}`);
        if (panel) panel.classList.add('is-active');
      });
    });
  });
})();

/* ── Fade-in on scroll ─────────────────────────────────────── */
(function () {
  if (!('IntersectionObserver' in window)) return;

  const style = document.createElement('style');
  style.textContent = `
    .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .fade-in.is-visible { opacity: 1; transform: translateY(0); }
  `;
  document.head.appendChild(style);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.gallery-item, .video-card, .service-card, .portfolio-card, .stat').forEach(el => {
    el.classList.add('fade-in');
    io.observe(el);
  });
})();

/* ── Contact form ──────────────────────────────────────────── */
(function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('is-submitted');
  });
})();
