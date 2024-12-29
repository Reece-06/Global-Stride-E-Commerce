const openSubNav = "header--subnav-open";
//const openSubNavMobile = "header--subnav-mobile-open";

const header = document.querySelector(".header");
const navList = document.getElementsByClassName("header__link");

["click", "mouseover"].forEach((evt) => {
  for (const nav of navList) {
    nav.addEventListener(
      evt,
      () => {
        header.classList.add(openSubNav);
      },
      false
    );
  }
});

for (const nav of navList) {
  nav.addEventListener("mouseout", () => {
    header.classList.remove(openSubNav);
  });
}
