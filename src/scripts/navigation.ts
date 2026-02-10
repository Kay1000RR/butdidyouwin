// Services dropdown accessibility
const servicesBtn = document.getElementById('services-dropdown-btn');
const servicesMenu = document.getElementById('services-dropdown-menu');

if (servicesBtn && servicesMenu) {
  const toggleServicesMenu = () => {
    const isExpanded = servicesBtn.getAttribute('aria-expanded') === 'true';
    servicesBtn.setAttribute('aria-expanded', String(!isExpanded));
    
    if (!isExpanded) {
      servicesMenu.classList.remove('opacity-0', 'invisible');
      servicesMenu.classList.add('opacity-100', 'visible');
      servicesBtn.querySelector('svg')?.classList.add('rotate-180');
    } else {
      servicesMenu.classList.add('opacity-0', 'invisible');
      servicesMenu.classList.remove('opacity-100', 'visible');
      servicesBtn.querySelector('svg')?.classList.remove('rotate-180');
    }
  };
  
  servicesBtn.addEventListener('click', toggleServicesMenu);
  
  servicesBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleServicesMenu();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && servicesBtn.getAttribute('aria-expanded') === 'true') {
      toggleServicesMenu();
      servicesBtn.focus();
    }
  });
}

// Mobile menu toggle
const toggle = document.getElementById('mobile-menu-toggle');
const menu = document.getElementById('mobile-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    menu.classList.toggle('hidden');
    
    const spans = toggle.querySelectorAll('span');
    if (!isExpanded) {
      spans[0].style.transform = 'rotate(45deg) translateY(8px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
      toggle.click();
    }
  });
  
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!menu.classList.contains('hidden') && 
        target instanceof Node &&
        !menu.contains(target) && 
        !toggle.contains(target)) {
      toggle.click();
    }
  });
}

// Navigation active state
const navLinks = document.querySelectorAll('header nav a[href^="/"]');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
  if (link instanceof HTMLAnchorElement) {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath || (currentPath.startsWith(linkPath) && linkPath !== '/')) {
      link.style.fontWeight = '600';
      link.style.color = '#1B3A6D';
    }
  }
});

// Sticky CTA Bar - Show on scroll past hero section (mobile only)
const stickyCTA = document.getElementById('sticky-cta-bar');
let lastScrollY = window.scrollY;
let ticking = false;

function updateStickyCTA() {
  const scrollY = window.scrollY;
  const heroHeight = 600; // Approximate hero section height
  
  // Show bar when scrolled past hero and scrolling down
  // Hide when at top or on contact page
  const isContactPage = window.location.pathname === '/contact' || window.location.pathname === '/contact/';
  
  if (!isContactPage && scrollY > heroHeight) {
    stickyCTA!.style.transform = 'translateY(0)';
  } else {
    stickyCTA!.style.transform = 'translateY(100%)';
  }
  
  lastScrollY = scrollY;
  ticking = false;
}

function requestTick() {
  if (!ticking) {
    window.requestAnimationFrame(updateStickyCTA);
    ticking = true;
  }
}

// Initial check
if (stickyCTA) {
  updateStickyCTA();
  
  // Listen for scroll events
  window.addEventListener('scroll', requestTick, { passive: true });
  
  // Re-check on page navigation (for SPAs or dynamic content)
  document.addEventListener('astro:page-load', updateStickyCTA);
}
