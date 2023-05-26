const mobileMenu = document.getElementById("mobile-menu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  if (mobileMenu.classList.contains("opened")) {
    mobileMenu.classList.remove("opened");
    hamburger.firstElementChild.src = "./images/header/hamburger.svg";
  } else {
    mobileMenu.classList.add("opened");
    hamburger.firstElementChild.src = "./images/header/hamburger-expanded.svg";
  }
});
