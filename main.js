let navEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let menuHamIcon = document.querySelector(".menu");

//Event listeners
navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  //   if (desktopMenu.classList.contains("inactive")) {
  //     desktopMenu.classList.remove("inactive");
  //   } else {
  //     desktopMenu.classList.add("inactive");
  //   }

  desktopMenu.classList.toggle("inactive"); //Es igual que el método de arriba, pero mucho mas corto y facil de leer 😎
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
