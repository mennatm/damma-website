
// Inject images
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('heroBg').style.backgroundImage = 'url(assets/images/hero-bg.jpg)';
  document.getElementById('missionImg').src = 'assets/images/mission.jpg';
  document.getElementById('dream1img').style.backgroundImage = 'url(assets/images/dream-1.jpg)';
  document.getElementById('dream2img').style.backgroundImage = 'url(assets/images/dream-2.jpg)';
  document.getElementById('dream3img').style.backgroundImage = 'url(assets/images/dream-3.jpg)';
  document.getElementById('dream4img').style.backgroundImage = 'url(assets/images/dream-4.jpg)';
});

// ── SCROLL ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 55) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('sb').style.width = pct + '%';
});

// ── FADE IN ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('in'), 80); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fi').forEach(el => obs.observe(el));

// ── LANGUAGE ──
let lang = 'en';
function setLang(l) {
  lang = l;
  document.getElementById('btn-en').classList.toggle('active', l === 'en');
  document.getElementById('btn-ar').classList.toggle('active', l === 'ar');
  const body = document.body;
  if (l === 'ar') { body.classList.add('ar'); body.setAttribute('dir','rtl'); }
  else             { body.classList.remove('ar'); body.setAttribute('dir','ltr'); }
  document.querySelectorAll('[data-' + l + ']').forEach(el => {
    const t = el.getAttribute('data-' + l);
    if (t) el.innerHTML = t;
  });
}