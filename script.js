// Light / dark theme toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function getActiveTheme() {
  const explicit = root.getAttribute('data-theme');
  if (explicit) return explicit;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = getActiveTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// "Request this style" buttons — prefill the contact form's template dropdown and scroll to it
const templateSelect = document.getElementById('templateSelect');
document.querySelectorAll('.card-request').forEach(btn => {
  btn.addEventListener('click', () => {
    const templateName = btn.getAttribute('data-template');
    if (templateSelect) {
      const match = Array.from(templateSelect.options).find(opt => opt.value === templateName);
      if (match) templateSelect.value = templateName;
    }
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    const nameField = document.querySelector('#contactForm input[name="name"]');
    if (nameField) setTimeout(() => nameField.focus(), 500);
  });
});

// Request form (front-end only demo)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = "Thanks! We'll follow up within one business day to talk about your project. (Connect this form to a backend or service like Formspree to actually receive requests.)";
    contactForm.reset();
  });
}

// Template search
const templateSearch = document.getElementById('templateSearch');
const searchClear = document.getElementById('searchClear');
const searchStatus = document.getElementById('searchStatus');

function filterTemplates(rawQuery) {
  const query = rawQuery.trim().toLowerCase();
  if (searchClear) searchClear.hidden = query.length === 0;

  let totalVisible = 0;
  document.querySelectorAll('#templates .grid').forEach((grid) => {
    let groupVisible = 0;
    grid.querySelectorAll('.card').forEach((card) => {
      const match = query === '' || card.textContent.toLowerCase().includes(query);
      card.classList.toggle('is-hidden', !match);
      if (match) { groupVisible += 1; totalVisible += 1; }
    });
    grid.classList.toggle('is-hidden', groupVisible === 0);
    const heading = grid.previousElementSibling;
    if (heading && heading.classList.contains('group-title')) {
      heading.classList.toggle('is-hidden', groupVisible === 0);
    }
  });

  if (!searchStatus) return;
  if (query === '') {
    searchStatus.hidden = true;
  } else {
    searchStatus.hidden = false;
    searchStatus.textContent = totalVisible === 0
      ? `No templates match "${rawQuery.trim()}".`
      : `${totalVisible} template${totalVisible === 1 ? '' : 's'} match "${rawQuery.trim()}".`;
  }
}

if (templateSearch) {
  templateSearch.addEventListener('input', (e) => filterTemplates(e.target.value));
}
if (searchClear) {
  searchClear.addEventListener('click', () => {
    templateSearch.value = '';
    filterTemplates('');
    templateSearch.focus();
  });
}

// Reveal-on-scroll
const revealTargets = document.querySelectorAll('.process-card, .card, .plan-card');
if ('IntersectionObserver' in window && revealTargets.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealTargets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    io.observe(el);
  });
}
