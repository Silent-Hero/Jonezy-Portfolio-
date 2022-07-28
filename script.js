const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".navbar .navbar-menu");
const menuItem = document.querySelectorAll(".navbar .nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});
