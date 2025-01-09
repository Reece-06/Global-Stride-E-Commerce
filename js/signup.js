const openSignupOverlay = "signup-open-overlay";
const removeScroll = "signup-remove-scroll";
const openSignupModal = "signup-open";

const signupBtn = document.querySelector(".section-cta__btn");

const profileIcon = document.querySelector(".header__profile");
const body = document.querySelector("body");
const signupOverlay = document.querySelector(".signup-overlay");
const signupExit = document.querySelector(".signup__exit");

signupBtn.addEventListener("click", () => {
  body.classList.add(removeScroll);
  body.classList.add(openSignupOverlay);
  signupOverlay.classList.add(openSignupModal);
});

signupExit.addEventListener("click", () => {
  body.classList.remove(removeScroll);
  body.classList.remove(openSignupOverlay);
  signupOverlay.classList.remove(openSignupModal);
});
