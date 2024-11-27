document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button[data-drawer-hide='drawer-top']");

  function handleResize() {
    if (window.innerWidth > 640) {
      button.click();
    }
  }

  if (window.innerWidth > 640) {
    button.click();
  }

  window.addEventListener("resize", handleResize);
});
