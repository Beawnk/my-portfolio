export default function useAnimateOnScroll(selector, options = { threshold: 0.1 }) {
  let observer;

  const handleTransitionEnd = (event) => {
    event.target.classList.add('has-animated');
  };

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;

          target.classList.add('is-visible');

          target.addEventListener('transitionend', handleTransitionEnd, { once: true });

          observer.unobserve(target);
        }
      });
    }, options);

    const elements = document.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));
  });

  onUnmounted(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.removeEventListener('transitionend', handleTransitionEnd);
    });
    
    if (observer) {
      observer.disconnect();
    }
  });
}