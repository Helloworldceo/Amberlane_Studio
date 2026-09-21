const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
}

document.querySelectorAll('.donate-amt').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.donate-amt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = "Thank you! We'll be in touch about how to get involved. (Connect this form to a backend or service like Formspree to actually receive messages.)";
    contactForm.reset();
  });
}

const revealTargets = document.querySelectorAll('.program-card, .impact-grid div');
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
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity .45s ease, transform .45s ease';
    io.observe(el);
  });
}
