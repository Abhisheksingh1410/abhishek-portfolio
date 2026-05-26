// Mobile navigation toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Mouse Follower Solid Dot
const follower = document.querySelector(".mouse-follower");

if (follower) {
  document.addEventListener("mousemove", (e) => {
    follower.style.left = `${e.clientX}px`;
    follower.style.top = `${e.clientY}px`;
    follower.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    follower.style.opacity = "0";
  });
}

// Scroll reveal animations using Intersection Observer
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}
