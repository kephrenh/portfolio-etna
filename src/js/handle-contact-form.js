const form = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const errorName = document.querySelector("#nameError");
const errorEmail = document.querySelector("#emailError");
const errorMessage = document.querySelector("#messageError");
const send = document.querySelector("#messageError");

function validationChamps() {
  if (nameInput.value.trim() === "") {
    errorName.textContent = "Veuillez entrer votre name";
    return false;
  } else {
    errorName.textContent = "";
  }

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!regexEmail.test(emailInput.value)) {
    errorEmail.textContent = "Veuillez entrer une adresse email valide";
    return false;
  } else {
    errorEmail.textContent = "";
  }

  if (messageInput.value.trim() === "") {
    errorMessage.textContent = "Veuillez entrer un message";
    return false;
  } else {
    errorMessage.textContent = "";
  }

  return true;
}

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  const formData = new FormData();

  formData.append("name", nameInput.value);
  formData.append("email", emailInput.value);
  formData.append("message", messageInput.value);

  fetch("https://getform.io/f/pbnvlwwb", {
    method: "POST",
    body: formData,
    headers: {
      "Accept": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      form.reset();
    })
    .catch((error) => console.log(error));
}
