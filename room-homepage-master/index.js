const arrowBtns = document.querySelectorAll(".arrow-btn");
const header = document.querySelector("header");
const slides = document.querySelectorAll(".template");
let currentSlide = 0;

function updateSlide(direction) {
  // Hide current slide
  slides[currentSlide].style.display = "none";

  // Update slide index
  currentSlide =
    direction === "next"
      ? (currentSlide + 1) % slides.length
      : (currentSlide - 1 + slides.length) % slides.length;

  // Show new slide
  slides[currentSlide].style.display = "block";

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const imageType = isMobile ? "mobile" : "desktop";
  header.style.backgroundImage = 
  `url("/images/${imageType}-image-hero-${currentSlide + 1}.jpg")`;
  // Update header background
  header.style.backgroundImage = bgImage;
}
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const direction = btn.classList.contains("arrow-btn--next")
      ? "next"
      : "prev";
    updateSlide(direction);
  });
});

const menu = document.querySelector(".menu");
const closeBody = document.querySelector(".close-menu");
const menuBody = document.querySelector(".menu-mobile");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", () => {
  menuBody.style.display = "block";
  overlay.classList.toggle("active");
});
closeBody.addEventListener("click", () => {
  menuBody.style.display = "none";
  overlay.classList.remove("active");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") updateSlide("prev");
    if (e.key === "ArrowRight") updateSlide("next");
});
