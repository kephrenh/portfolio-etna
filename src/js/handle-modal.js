document.addEventListener("DOMContentLoaded", () => {
  const modalButtons = document.querySelectorAll("[data-modal-show]");
  const closeButtons = document.querySelectorAll("[data-modal-hide]");
  const modals = document.querySelectorAll(".modals");

  modalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-modal-show");
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-modal-hide");
      const modal = document.getElementById(targetId);
      if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    });
  });
});
