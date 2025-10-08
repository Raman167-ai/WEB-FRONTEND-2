// JS for 'Why Choose WanderLuxe?' section: highlight on hover and animate in

document.addEventListener('DOMContentLoaded', function() {
  const whySection = document.querySelector('.why-us');
  if (!whySection) return;
  const items = whySection.querySelectorAll('li');

  // Animate in on scroll
  function animateOnScroll() {
    const rect = whySection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      items.forEach((li, i) => {
        setTimeout(() => {
          li.style.opacity = '1';
          li.style.transform = 'translateY(0)';
        }, i * 120);
      });
      window.removeEventListener('scroll', animateOnScroll);
    }
  }

  // Initial state
  items.forEach(li => {
    li.style.opacity = '0';
    li.style.transform = 'translateY(40px)';
    li.style.transition = 'all 0.5s cubic-bezier(.4,2,.6,1)';
    li.addEventListener('mouseenter', () => {
      li.style.background = '#1976d2';
      li.style.color = '#fff';
      li.style.boxShadow = '0 4px 18px rgba(25,118,210,0.13)';
      li.style.transform = 'scale(1.04)';
    });
    li.addEventListener('mouseleave', () => {
      li.style.background = '';
      li.style.color = '';
      li.style.boxShadow = '';
      li.style.transform = 'translateY(0)';
    });
  });

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // in case already in view
});
