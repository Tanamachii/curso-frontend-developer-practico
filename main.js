let navEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let menuHamIcon = document.querySelector(".menu");
let shoppingIcon = document.querySelector(".navbar-shopping-cart");
let cartDetail = document.querySelector("#shoppingCart");
let cardsContainer = document.querySelector(".cards-container");
let productDetail = document.querySelector("#productDetail");
let productDetailCloseIcon = document.querySelector(".product-detail-close");

//Event listeners
navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
shoppingIcon.addEventListener("click", toggleCart);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);
function toggleDesktopMenu() {
  //   if (desktopMenu.classList.contains("inactive")) {
  //     desktopMenu.classList.remove("inactive");
  //   } else {
  //     desktopMenu.classList.add("inactive");
  //   }

  desktopMenu.classList.toggle("inactive"); //Es igual que el método de arriba, pero mucho mas corto y facil de leer 😎
  if (!cartDetail.classList.contains("inactive")) {
    cartDetail.classList.toggle("inactive");
  } else if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.toggle("inactive");
  }
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  if (!cartDetail.classList.contains("inactive")) {
    cartDetail.classList.toggle("inactive");
  } else if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.toggle("inactive");
  }
}
function toggleCart() {
  cartDetail.classList.toggle("inactive");
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.toggle("inactive");
  } else if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.toggle("inactive");
  } else if (!productDetail.classList.contains("inactive")) {
    productDetail.classList.toggle("inactive");
  }
}

function openDetailsProduct() {
  cartDetail.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  productDetail.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetail.classList.add("inactive");
}
//Main Container
const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  img: "https://picsum.photos/300",
});
productList.push({
  name: "Car",
  price: 1200,
  img: "https://picsum.photos/300",
});
productList.push({
  name: "Computer",
  price: 190,
  img: "https://picsum.photos/300",
});

function renderProducts(arr) {
  arr.forEach((e) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", e.img);
    img.addEventListener("click", openDetailsProduct);
    img.style.cursor = "pointer";

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + e.price;

    const productName = document.createElement("p");
    productName.innerText = e.name;

    const productInfoFigure = document.createElement("figure");

    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  });
}

renderProducts(productList);
