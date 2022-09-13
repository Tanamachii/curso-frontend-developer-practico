let navEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  //   if (desktopMenu.classList.contains("inactive")) {
  //     desktopMenu.classList.remove("inactive");
  //   } else {
  //     desktopMenu.classList.add("inactive");
  //   }

  desktopMenu.classList.toggle("inactive"); //Es igual que el método de arriba, pero mucho mas corto y facil de leer 😎
}
