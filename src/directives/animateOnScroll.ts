import type { Directive } from 'vue';

const animateOnScroll: Directive<HTMLElement> = {
  mounted: (el) => {
    el.classList.add('animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(el);
  },
};

export default animateOnScroll;
