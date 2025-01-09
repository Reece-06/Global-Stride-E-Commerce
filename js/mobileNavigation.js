const mobileMenu = document.querySelector(".header__menu");
const closeMobileMenu = document.querySelector(".header__close");

const openMobileSubNav = "header--subnav-mobile-open";

mobileMenu.addEventListener("click", () => {
  header.classList.add(openMobileSubNav);
});

closeMobileMenu.addEventListener("click", () => {
  header.classList.remove(openMobileSubNav);
});
