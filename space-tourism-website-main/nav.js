const primaryNav = document.querySelector(".header__nav");
const navToggle = document.querySelector(".header__menu_toggle");

navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("translate");
  navToggle.classList.toggle("change");
});
