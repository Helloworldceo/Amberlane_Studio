const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
}

document.querySelectorAll('.ep-play').forEach(btn => {
  btn.addEventListener('click', () => {
    const playing = btn.textContent.trim() === '⏸';
    document.querySelectorAll('.ep-play').forEach(b => b.textContent = '▶');
    btn.textContent = playing ? '▶' : '⏸';
  });
});

const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = 'Thanks — got your note. (Connect this form to a backend or service like Formspree to actually receive messages.)';
    contactForm.reset();
  });
}

const revealTargets = document.querySelectorAll('.ep-item, .about-grid');
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
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    io.observe(el);
  });
}
