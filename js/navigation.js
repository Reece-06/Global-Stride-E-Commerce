const openSubNav = "header--subnav-open";

const header = document.querySelector(".header");
const navList = document.getElementsByClassName("header__link");
const subNavDesktops = document.querySelector(".header__subnav");

// Sub Navigation Event Listeners

["click", "mouseover"].forEach((evt) => {
  for (const nav of navList) {
    nav.addEventListener(
      evt,
      () => {
        header.classList.add(openSubNav);
        console.log(header.classList);
      },
      false
    );
  }
});
subNavDesktops.addEventListener("mouseover", () => {
  header.classList.add(openSubNav);
  console.log(header.classList);
});

subNavDesktops.addEventListener("mouseout", () => {
  header.classList.remove(openSubNav);
  console.log(header.classList);
});
