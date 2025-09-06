console.log("Glimo eBooks main.js loaded");

// Simple hover animations for ebook cards
document.querySelectorAll('.ebook-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
