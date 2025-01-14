const mobileMenu = document.querySelector(".header__menu");
const closeMobileMenu = document.querySelector(".header__close");

const primarySubNavs = document.querySelectorAll(".header__subnav-primary");
const secondarySubNavs = document.querySelectorAll(".header__subnav-secondary");
const tertiarySubNavs = document.querySelectorAll(".header__subnav-tertiary");

const openPrimarySubNav = "header__subnav-primary--open";
const openSecondarySubNav = "header__subnav-secondary--open";
const openTertiarySubNav = "header__subnav-tertiary--open";

const openMobileSubNav = "header--subnav-mobile-open";
const rotateIcon = "header__subnav-icon--rotate";
const hideArrowBtn = "header__subnav-btn--hide";

mobileMenu.addEventListener("click", () => {
  header.classList.add(openMobileSubNav);
});

closeMobileMenu.addEventListener("click", () => {
  header.classList.remove(openMobileSubNav);
});

function addSubNavEventListener(subNavs, openSubNav) {
  for (const subNav of subNavs) {
    if (!subNav.nextElementSibling) {
      subNav.querySelector(".header__subnav-btn").classList.add(hideArrowBtn);
    }
    subNav.addEventListener("click", () => {
      subNav.parentElement.classList.toggle(openSubNav);
      subNav.querySelector(".icon").classList.toggle(rotateIcon);
    });
  }
}

addSubNavEventListener(primarySubNavs, openPrimarySubNav);
addSubNavEventListener(secondarySubNavs, openSecondarySubNav);
addSubNavEventListener(tertiarySubNavs, openTertiarySubNav);
