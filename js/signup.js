const openSignupOverlay = "signup-open-overlay";
const removeScroll = "signup-remove-scroll";
const openSignupModal = "signup-open";

const signupBtn = document.querySelector(".section-cta__btn");

const profileIcon = document.querySelector(".header__profile");
const body = document.querySelector("body");

const signupExit = document.querySelector(".exit");

const profileBtn = document.querySelector(".header__profile");

function showSignupModal() {
  body.classList.add(removeScroll);
  body.classList.add(openSignupOverlay);
  body.classList.add(openSignupModal);
}
function removeSignupModal() {
  body.classList.remove(removeScroll);
  body.classList.remove(openSignupOverlay);
  body.classList.remove(openSignupModal);
}

signupBtn.addEventListener("click", () => {
  showSignupModal();
});
profileBtn.addEventListener("click", () => {
  showSignupModal();
});
signupExit.addEventListener("click", () => {
  removeSignupModal();
});
