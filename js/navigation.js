const openSubNav = "header--subnav-open";

const header = document.querySelector(".header");
const navList = document.getElementsByClassName("header__link");
const subNavDesktops = document.querySelector(".header__subnav");
const linkBorderBottom = "header__link--border-bot";
let lastHoveredLi = null;

// Sub Navigation Event Listeners

["click", "mouseover"].forEach((evtType) => {
  for (const nav of navList) {
    nav.addEventListener(
      evtType,
      (evt) => {
        header.classList.add(openSubNav);
        console.log(evt);
        lastHoveredLi = nav;
      },
      false
    );
  }
});

subNavDesktops.addEventListener("mouseover", () => {
  header.classList.add(openSubNav);
  lastHoveredLi.parentElement.classList.add(linkBorderBottom);
});

subNavDesktops.addEventListener("mouseout", () => {
  header.classList.remove(openSubNav);
  lastHoveredLi.parentElement.classList.remove(linkBorderBottom);
});
