document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".header__menu-toggle");
  const nav = document.querySelector(".header__nav");

  menuToggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  });

  // GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  // Header animation
  gsap.from(".header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Banner animations
  gsap.from(".banner__title", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from(".banner__subtitle", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.7,
    ease: "power3.out",
  });

  gsap.from(".banner__cta-button", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.9,
    ease: "power3.out",
  });

  gsap.from(".banner__image", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });

  // Parallax effect on banner image
  gsap.to(".banner__image img", {
    y: "20%",
    scrollTrigger: {
      trigger: ".banner",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  // About section animations
  gsap.from(".about__title", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
    },
  });

  gsap.from(".about__content", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
    },
  });

  // Classes section animations
  gsap.from(".classes__title", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".classes",
      start: "top 80%",
    },
  });

  gsap.from(".classes__item", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".classes__grid",
      start: "top 80%",
    },
  });

  // Contact section animations
  gsap.from(".contact__title", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
    },
  });

  gsap.from(".contact__form", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
    },
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
