// Animate the first paragraph inside the hero section
window.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.hero p');
  if (intro) {
    intro.style.transform = 'scale(1.05)';
    intro.style.transition = 'transform 0.6s ease-in-out';
  }
});

