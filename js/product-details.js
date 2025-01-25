const exitBtn = document.querySelector(".exit");
const removeScrollClass = "product-detail--remove-scroll";
const openOverlayClass = "product-detail--open-overlay";
const openMoreDetailsClass = "product-detail--open-details";
const body = document.querySelector("body");
const moreDetailsBtn = document.querySelector(".product-detail__more");

exitBtn.addEventListener("click", () => {
  body.classList.remove(
    removeScrollClass,
    openOverlayClass,
    openMoreDetailsClass
  );
});
moreDetailsBtn.addEventListener("click", () => {
  body.classList.add(removeScrollClass, openOverlayClass, openMoreDetailsClass);
});
