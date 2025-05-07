const submitBtn = document.querySelector("button");
const frontCard = document.querySelector(".front-card");
const backCard = document.querySelector(".back-card");
const selectedRatingSpan = document.getElementById("selected-rating");
const ratings = document.querySelectorAll('input[name="rating"]');

submitBtn.addEventListener("click", () => {
  let selectedValue;
  ratings.forEach(radio => {
    if (radio.checked) selectedValue = radio.value;
  });

  if (selectedValue) {
    selectedRatingSpan.textContent = selectedValue;
    frontCard.style.display = "none";
    backCard.style.display = "flex";
  } else {
    alert("Please select a rating before submitting.");
  }
});