const form = document.getElementById("loginForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

  const firstName = document.getElementsByName("Name")[0];
  const lastName = document.getElementsByName("Surname")[0];
  const email = document.getElementsByName("email")[0];
  const queryType = document.querySelector('input[name="queryType"]:checked');
  const message = document.getElementsByName("message")[0];
  const contact = document.getElementsByName("contact")[0];
  const errors = document.querySelectorAll('.error-display');

  // Clear previous errors
  errors.forEach(error => error.style.display = 'none');

  let isValid = true;

  // Validate first name
  if(firstName.value.trim() === '') {
    firstName.nextElementSibling.style.display = 'block';
    isValid = false;
  }

  // Validate last name
  if(lastName.value.trim() === '') {
    lastName.nextElementSibling.style.display = 'block';
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email.value)) {
    email.nextElementSibling.style.display = 'block';
    isValid = false;
  }

  // Validate query type
  if(!queryType) {
    document.querySelector('.third-section').nextElementSibling.style.display = 'block';
    isValid = false;
  }

  // Validate message
  if(message.value.trim() === '') {
    message.nextElementSibling.style.display = 'block';
    isValid = false;
  }

  // Validate consent
  if(!contact.checked) {
    contact.parentElement.nextElementSibling.style.display = 'block';
    isValid = false;
  }

  if(isValid) {
    // Show success message and reset form
    document.querySelector('.display-message').style.display = 'block';
    form.reset();
    setTimeout(() => {
      document.querySelector('.display-message').style.display = 'none';
    }, 3000);
  }

});
