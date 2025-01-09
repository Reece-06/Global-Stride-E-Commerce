const buttonClick = "section-new__btn--open";
const newArrivalBtn = document.querySelector(".section-new__btn-arrivals");
const bestSellersBtn = document.querySelector(".section-new__btn-best");

newArrivalBtn.addEventListener("click", () => {
  newArrivalBtn.classList.add(buttonClick);
  bestSellersBtn.classList.remove(buttonClick);
});

bestSellersBtn.addEventListener("click", () => {
  bestSellersBtn.classList.add(buttonClick);
  newArrivalBtn.classList.remove(buttonClick);
});
