gsap.registerPlugin(ScrollTrigger);

gsap.to(".new-arrival .badge", {
  y: () => (window.innerWidth <= 768 ? 180 : 290),
  ease: "none",
  scrollTrigger: {
    trigger: ".new-arrival .image-wrap",
    start: () => {
      const title = document.querySelector(".hero .title");
      const titleBottom = title.getBoundingClientRect().bottom;
      return `top ${titleBottom}px`;
    },
    end: "bottom top",
    scrub: true,
    invalidateOnRefresh: true,
  },
});

gsap.to(".bestseller .title", {
  y: () => (window.innerWidth <= 768 ? 140 : 300),
  ease: "none",
  scrollTrigger: {
    trigger: ".bestseller .video",
    start: () => {
      const title = document.querySelector(".hero .title");
      const titleBottom = title.getBoundingClientRect().bottom;
      return `top ${titleBottom}px`;
    },
    end: "bottom top",
    scrub: true,
    invalidateOnRefresh: true,
  },
});
