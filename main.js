let navEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let menuHamIcon = document.querySelector(".menu");
let shoppingIcon = document.querySelector(".navbar-shopping-cart");
let cartDetail = document.querySelector(".product-detail");
//Event listeners
navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
shoppingIcon.addEventListener("click", toggleCart);

function toggleDesktopMenu() {
  //   if (desktopMenu.classList.contains("inactive")) {
  //     desktopMenu.classList.remove("inactive");
  //   } else {
  //     desktopMenu.classList.add("inactive");
  //   }

  desktopMenu.classList.toggle("inactive"); //Es igual que el método de arriba, pero mucho mas corto y facil de leer 😎
  if (!cartDetail.classList.contains("inactive")) {
    cartDetail.classList.toggle("inactive");
  }
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  if (!cartDetail.classList.contains("inactive")) {
    cartDetail.classList.toggle("inactive");
  }
}
function toggleCart() {
  cartDetail.classList.toggle("inactive");
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.toggle("inactive");
  } else if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.toggle("inactive");
  }
}
