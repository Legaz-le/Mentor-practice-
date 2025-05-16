const form = document.getElementById("form");
const container = document.querySelector(".container");
const succespage = document.querySelector(".success-page");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");

  if (email.checkValidity()) {
    container.style.display = "none";
    succespage.classList.add("visible");
    document.querySelector(".email-address").textContent = email.value;
  }else {
    document.querySelector('.error-message').style.display = 'block';
    email.classList.add('error');
  }
});
