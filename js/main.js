const open = document.querySelector(".js-btn");
const tab = document.querySelector(".header-menu");
const line = document.querySelector(".header-btn-line");
const nav = document.querySelector(".header-nav");
const mask = document.querySelector(".js-mask");

open.addEventListener("click", () => {
  tab.classList.toggle("open");
  open.classList.toggle("open");
  open.classList.toggle("is-open");
  line.classList.toggle("open");
  nav.classList.toggle("open");
  mask.classList.toggle("is-open");
});

mask.addEventListener("click", () => {
  tab.classList.toggle("open");
  open.classList.toggle("open");
  open.classList.toggle("is-open");
  line.classList.toggle("open");
  nav.classList.toggle("open");
  mask.classList.remove("is-open");
});

// ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".js-bg-left").forEach((el) => {
  gsap.from(el, {
    x: -300,
    opacity: 0,
    duration: 2.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: el,
    },
  });
});

gsap.utils.toArray(".js-text").forEach((el) => {
  gsap.from(el, {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: el,
    },
  });
});

gsap.utils.toArray(".js-bg-bottom").forEach((el) => {
  gsap.from(el, {
    y: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: el,
    },
  });
});

gsap.utils.toArray(".bg-opacity").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    duration: 5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: el,
    },
  });
});
