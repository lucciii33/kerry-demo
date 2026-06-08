/* ════════════════════════════════════════════
   KMB Consultancy — kerrymitchellbrown.com
   Shared site script for all pages
════════════════════════════════════════════ */

// Sticky nav once the user scrolls past the hero
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => nav.classList.toggle('stuck', scrollY > 60));
}

// Reveal-on-scroll animation for elements marked .rv
const obs = new IntersectionObserver(e => e.forEach(x => {
  if (x.isIntersecting) { x.target.classList.add('on'); obs.unobserve(x.target); }
}), { threshold: .1 });
document.querySelectorAll('.rv').forEach(el => obs.observe(el));
