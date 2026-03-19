// ---------------------------------------------------------------------------
// Services dropdown (desktop)
// ---------------------------------------------------------------------------
function initServicesDropdown(): void {
  const btn = document.getElementById('services-dropdown-btn');
  const menu = document.getElementById('services-dropdown-menu');
  if (!btn || !menu) return;

  const open = () => {
    btn.setAttribute('aria-expanded', 'true');
    menu.classList.remove('opacity-0', 'invisible');
    menu.classList.add('opacity-100', 'visible');
    btn.querySelector('svg')?.classList.add('rotate-180');
  };

  const close = () => {
    btn.setAttribute('aria-expanded', 'false');
    menu.classList.add('opacity-0', 'invisible');
    menu.classList.remove('opacity-100', 'visible');
    btn.querySelector('svg')?.classList.remove('rotate-180');
  };

  const toggle = () => {
    btn.getAttribute('aria-expanded') === 'true' ? close() : open();
  };

  btn.addEventListener('click', toggle);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      close();
      btn.focus();
    }
  });
}

// ---------------------------------------------------------------------------
// Mobile menu
// ---------------------------------------------------------------------------
function initMobileMenu(): void {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const spans = toggle.querySelectorAll<HTMLSpanElement>('span');

  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('hidden', !open);

    if (spans.length >= 3) {
      spans[0].classList.toggle('hamburger-top-open', open);
      spans[1].classList.toggle('hamburger-mid-open', open);
      spans[2].classList.toggle('hamburger-bot-open', open);
    }
  };

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) setOpen(false);
  });

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (isOpen() && target instanceof Node && !menu.contains(target) && !toggle.contains(target)) {
      setOpen(false);
    }
  });
}

// ---------------------------------------------------------------------------
// Navigation active state (CSS class rather than inline styles)
// ---------------------------------------------------------------------------
function initActiveState(): void {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  document.querySelectorAll('header nav a[href^="/"]').forEach((link) => {
    if (!(link instanceof HTMLAnchorElement)) return;
    const linkPath = new URL(link.href).pathname.replace(/\/$/, '') || '/';
    if (linkPath === currentPath || (currentPath.startsWith(linkPath) && linkPath !== '/')) {
      link.classList.add('nav-active');
    }
  });
}

// ---------------------------------------------------------------------------
// Sticky CTA bar (mobile)
// ---------------------------------------------------------------------------
function initStickyCTA(): void {
  const bar = document.getElementById('sticky-cta-bar');
  if (!bar) return;

  const isContactPage =
    window.location.pathname === '/contact' || window.location.pathname === '/contact/';

  let ticking = false;

  const update = () => {
    // Use first section's height as threshold instead of magic number
    const hero = document.querySelector('main > section:first-child');
    const threshold = hero instanceof HTMLElement ? hero.offsetHeight : 600;

    if (!isContactPage && window.scrollY > threshold) {
      bar.classList.remove('translate-y-full');
    } else {
      bar.classList.add('translate-y-full');
    }
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------
initServicesDropdown();
initMobileMenu();
initActiveState();
initStickyCTA();
