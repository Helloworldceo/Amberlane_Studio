// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Contact form (front-end only demo)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = "Thanks for reaching out! I'll get back to you soon. (Connect this form to a backend or service like Formspree to actually receive messages.)";
    contactForm.reset();
  });
}

// Animate skill bars when scrolled into view
const skillBars = document.querySelectorAll('.bar-fill');
if ('IntersectionObserver' in window && skillBars.length) {
  const barIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const width = target.style.width;
        target.style.width = '0%';
        requestAnimationFrame(() => {
          target.style.transition = 'width 1s ease';
          target.style.width = width;
        });
        barIo.unobserve(target);
      }
    });
  }, { threshold: 0.4 });
  skillBars.forEach(bar => barIo.observe(bar));
}

// Reveal-on-scroll
const revealTargets = document.querySelectorAll('.timeline-item, .hobby-card, .others-card');
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
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    io.observe(el);
  });
}
