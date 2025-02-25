 // Smooth scroll for navbar links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Project carousel
const projectCarousel = document.getElementById('projectCarousel');
const prevButton = document.getElementById('prevProject');
const nextButton = document.getElementById('nextProject');
let scrollPosition = 0;
const scrollAmount = 320; // Width of each project card + margin

prevButton.addEventListener('click', () => {
  scrollPosition -= scrollAmount;
  if (scrollPosition < 0) scrollPosition = 0;
  projectCarousel.scrollLeft = scrollPosition;
});

nextButton.addEventListener('click', () => {
  scrollPosition += scrollAmount;
  if (scrollPosition > projectCarousel.scrollWidth - projectCarousel.clientWidth) {
    scrollPosition = projectCarousel.scrollWidth - projectCarousel.clientWidth;
  }
  projectCarousel.scrollLeft = scrollPosition;
});

// Scroll-to-top button
const scrollTopButton = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.remove('hidden');
  } else {
    scrollTopButton.classList.add('hidden');
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (name && email && message) {
    // Simulating form submission (replace with actual API call)
    formMessage.textContent = 'Thank you for your message! I’ll get back to you soon.';
    formMessage.classList.add('text-green-600');
    contactForm.reset();
    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.classList.remove('text-green-600');
    }, 3000);
  } else {
    formMessage.textContent = 'Please fill out all fields.';
    formMessage.classList.add('text-red-600');
    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.classList.remove('text-red-600');
    }, 3000);
  }
});

// Add hover effects for cards
document.querySelectorAll('.hover-scale').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('scale-105');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('scale-105');
  });
});
