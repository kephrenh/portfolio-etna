document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");
  const errorName = document.querySelector("#nameError");
  const errorEmail = document.querySelector("#emailError");
  const errorMessage = document.querySelector("#messageError");
  const send = document.querySelector("#sendButton");

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === "") {
      errorName.textContent = "Veuillez entrer votre name";
      nameInput.classList.add("border-red-500");
      isValid = false;
    } else {
      errorName.textContent = "";
    }

    if (!regexEmail.test(emailInput.value)) {
      console.log("Email is not valid");
      errorEmail.textContent = "Veuillez entrer une adresse email valide";
      emailInput.classList.add("border-red-500");
      isValid = false;
    } else {
      console.log("Email is valid");
      errorEmail.textContent = "";
    }

    if (messageInput.value.trim() === "") {
      errorMessage.textContent = "Veuillez entrer un message";
      messageInput.classList.add("border-red-500");
      isValid = false;
    } else {
      errorMessage.textContent = "";
    }

    return isValid;
  }

  send.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      formData.append("name", nameInput.value);
      formData.append("email", emailInput.value);
      formData.append("message", messageInput.value);

      console.log(formData);

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
  });
});
