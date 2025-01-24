const colorBtns = document.querySelectorAll(".product-detail__btn-color");
const pressedColorBtnClass = "product-detail__btn-color--pressed";
const hoverColorBtnClass = "product-detail__btn-color--hover";

/* Color Buttons */

function removePressedBtn(btns, pressedBtnClass) {
  for (var i = 0; i < btns.length; i++) {
    const btn = btns[i];
    const btnClasses = btn.classList;
    const isPressedBefore = btnClasses.contains(pressedBtnClass);
    if (isPressedBefore) {
      btnClasses.remove(pressedBtnClass);
    }
  }
}
function isButtonPressed(btn, pressedBtnClass) {
  const isPressed = btn.classList.contains(pressedBtnClass);
  return isPressed;
}
function identifyEventType(event, btns, btn, pressedBtnClass, hoverBtnClass) {
  if (event.type === "click") {
    removePressedBtn(btns, pressedBtnClass);
    btn.classList.add(pressedBtnClass);
  }
  if (event.type === "mouseover") {
    const isAlreadyPressed = isButtonPressed(btn, pressedBtnClass);
    if (!isAlreadyPressed) {
      btn.classList.add(hoverBtnClass);
    }
  } else {
    btn.classList.remove(hoverBtnClass);
  }
}

for (var i = 0; i < colorBtns.length; i++) {
  const colorBtn = colorBtns[i];
  ["click", "mouseover", "mouseout"].forEach((evtType) => {
    colorBtn.addEventListener(evtType, (event) => {
      identifyEventType(
        event,
        colorBtns,
        colorBtn,
        pressedColorBtnClass,
        hoverColorBtnClass
      );
    });
  });
}
/* Size buttons */
const sizeBtns = document.querySelectorAll(".product-detail__size-btn");
const pressedSizeBtnClass = "product-detail__size-btn--pressed";
const hoverSizeBtnClass = "product-detail__size-btn--hover";

for (var i = 0; i < sizeBtns.length; i++) {
  const sizeBtn = sizeBtns[i];
  ["click", "mouseover", "mouseout"].forEach((evtType) => {
    sizeBtn.addEventListener(evtType, (event) => {
      identifyEventType(
        event,
        sizeBtns,
        sizeBtn,
        pressedSizeBtnClass,
        hoverSizeBtnClass
      );
    });
  });
}
