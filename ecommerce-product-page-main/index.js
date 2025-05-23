const form = document.getElementById("formSubmit");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const zero = document.querySelector(".zero");
const cart = document.getElementById("cart");
const checkout = document.querySelector(".purchased-info");
const info = document.querySelector(".display-or-not");
const x = document.querySelector(".x");
const amount_purchased = document.querySelector(".amount-purchased");
const total = document.querySelector(".total");
const deleteItem = document.querySelector(".delete");
const finishedPurchase = document.querySelector(".checkout");
const thankMessage = document.querySelector(".empty");

const images = document.querySelectorAll(".small-img");
const mainShoes = document.querySelector(".main-shoes");

const lightbox = document.getElementById("lightbox");
const lightBoxContent = document.querySelector(".lightbox-content");
const closeLightbox = document.querySelector(".close-lightbox");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const lightBoxImg = document.getElementById("lightbox-main");
const lightboxImages = document.querySelectorAll(".lightbox-thumb");

const mobileNext = document.getElementById("next-mobile");
const mobileprevious = document.getElementById("previous-mobile");
const menu = document.querySelector(".menu");
const menuBody = document.querySelector(".menu-mobile");
const overlay = document.getElementById("overlay");
const closeMenu = document.querySelector(".close-menu");

let score = 0;
const PRICE = 125.0;
let currentIndex = 0;

minus.addEventListener("click", () => {
  if (score > 0) {
    score--;
    zero.textContent = Math.max(0, score);
  }
});

plus.addEventListener("click", () => {
  score++;
  zero.textContent = score;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberPurchased = document.querySelector(".cart-counter");
  if (score > 0) {
    numberPurchased.textContent = Math.max(0, score);
    numberPurchased.style.display = "block";
    info.style.display = "flex";
    zero.textContent = 0;
    x.style.display = "block";
    amount_purchased.style.display = "inline";
    total.style.display = "inline";
    if (score === 1) {
      x.style.display = "none";
      amount_purchased.style.display = "none";
      total.style.display = "none";
    }
    if (score > 1) {
      amount_purchased.textContent = score;
      total.textContent = `$${(PRICE * score).toFixed(2)}`;
    }
    score = 0;
  } else {
    numberPurchased.style.display = "none";
    numberPurchased.textContent = 0;
    info.style.display = "none";
  }
});
deleteItem.addEventListener("click", () => {
  info.style.display = "none";
  document.querySelector(".cart-counter").style.display = "none";
});

finishedPurchase.addEventListener("click", () => {
  info.style.display = "none";
  document.querySelector(".cart-counter").style.display = "none";
  thankMessage.textContent = "Thank you for your purchase.";
});

cart.addEventListener("click", () => (checkout.style.display = "block"));

document.addEventListener("click", (e) => {
  if (!checkout.contains(e.target) && !cart.contains(e.target)) {
    checkout.style.display = "none";
    thankMessage.textContent = "Your cart is empty.";
  }
});

function updateActiveImage(index) {
  currentIndex = index;

  images.forEach((img) => img.classList.remove("active"));
  lightboxImages.forEach((img) => img.classList.remove("active"));

  images[index].classList.add("active");
  lightboxImages[index].classList.add("active");

  const newSrc = lightboxImages[index].src.replace("-thumbnail", "");
  mainShoes.src = newSrc;
  lightBoxImg.src = newSrc;
}
images.forEach((img, index) => {
  img.addEventListener("click", () => updateActiveImage(index));
});

next.addEventListener("click", () =>
  updateActiveImage((currentIndex + 1) % lightboxImages.length)
);
previous.addEventListener("click", () =>
  updateActiveImage(
    (currentIndex - 1 + lightboxImages.length) % lightboxImages.length
  )
);
mobileNext.addEventListener("click", () =>
  updateActiveImage((currentIndex + 1) % lightboxImages.length)
);
mobileprevious.addEventListener("click", () =>
  updateActiveImage(
    (currentIndex - 1 + lightboxImages.length) % lightboxImages.length
  )
);

mainShoes.addEventListener("click", () => lightbox.style.display = "block");

closeLightbox.addEventListener("click", () => lightbox.style.display = "none");

lightBoxContent.addEventListener("click", (e) => e.stopPropagation());

document.addEventListener("click", (e) => {
  if (!lightBoxContent.contains(e.target) && e.target !== mainShoes) {
    lightbox.style.display = "none";
  }
});

menu.addEventListener("click", () => {
  menuBody.style.display = "block";
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menuBody.style.display = "none";
  overlay.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuBody.contains(e.target)) {
    menuBody.style.display = "none";
    overlay.classList.remove("active");
  }
});
