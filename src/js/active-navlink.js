document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  const currentPath = window.location.pathname;
  links.forEach((link) => {
    const parentLi = link.parentElement;
    if (link.href.includes(`${currentPath}`)) {
      console.log(`${currentPath}`);
      link.classList.add("active");
      parentLi.classList.add("active");
    }
  });
});
