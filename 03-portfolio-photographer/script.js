// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Header background on scroll (hero starts transparent/dark-text-on-image)
const header = document.querySelector('.site-header');
if (header) {
  const toggleHeader = () => header.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.7);
  window.addEventListener('scroll', toggleHeader);
  toggleHeader();
}

// Contact form (front-end only demo)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = "Thanks for reaching out! I'll reply within 48 hours. (Connect this form to a backend or service like Formspree to actually receive messages.)";
    contactForm.reset();
  });
}

// Reveal-on-scroll
const revealTargets = document.querySelectorAll('.gallery-item, .service-card');
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
