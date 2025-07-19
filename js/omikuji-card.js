const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    const isLeft = el.classList.contains('slide-left');
    const isRight = el.classList.contains('slide-right');

    if (entry.isIntersecting) {
      if (isLeft) el.classList.add('slide-in-left');
      if (isRight) el.classList.add('slide-in-right');
    } else {
      el.classList.remove('slide-in-left');
      el.classList.remove('slide-in-right');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.slide-trigger').forEach(el => {
  observer.observe(el);
});