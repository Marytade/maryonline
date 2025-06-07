// Animate the first paragraph inside the hero section
window.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.hero p');
  if (intro) {
    intro.style.transform = 'scale(1.05)';
    intro.style.transition = 'transform 0.6s ease-in-out';
  }
});

// Lightbox interactivity
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = item.src || item.querySelector('source')?.src;
    lightbox.classList.add('active');
  });
});

// Close lightbox on click
document.getElementById('lightbox').addEventListener('click', () => {
  document.getElementById('lightbox').classList.remove('active');
});
