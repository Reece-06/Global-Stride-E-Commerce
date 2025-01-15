const accordionUppers = document.getElementsByClassName(
  "products__accordion-upper"
);
const accordionOpen = "products__accordion-open";

for (const accordionUpper of accordionUppers) {
  accordionUpper.addEventListener("click", () => {
    accordionUpper.parentElement.classList.toggle(accordionOpen);
  });
}
