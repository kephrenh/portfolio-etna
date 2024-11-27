document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  const currentPath = window.location.pathname;
  links.forEach((link) => {
    const parentLi = link.parentElement;
    link.classList.remove("active");
    if (link.href.includes(`${currentPath}`)) {
      link.classList.add("active");
      parentLi.classList.add("active");
    }
  });
});
