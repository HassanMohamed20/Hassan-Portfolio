// 1. Toggle Icon Navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// 2. Scroll Sections Active Link
let sections = document.querySelectorAll("section"); // تأكد إن المتغير ده متعرف صح
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight; // التصحيح: height بدل hight
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // 3. Sticky Navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // 4. Remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// 5. Scroll Reveal
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .portfolio-box, .contact form, .skills", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-content p", { origin: "right" });
ScrollReveal().reveal(".about-img", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });
ScrollReveal().reveal(".tool-card", { interval: 100 });
ScrollReveal().reveal(".education-content", { origin: "left", interval: 200 });

// 6. Typed JS
const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Software Tester",
    
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// 7. Swiper
var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    617: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 3 },
  },
});

// 8. Form Submit Redirect
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  if (params.has("submitted")) {
    window.location.href =
      "https://hassanmohamed20.github.io/Hassan-Portfolio-/";
  }
});
