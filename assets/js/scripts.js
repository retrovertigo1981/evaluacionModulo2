const mobileMenuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".menu-mobile");

function showMenuMobile() {
  mobileMenu.classList.toggle("active");
}

mobileMenuButton.addEventListener("click", showMenuMobile);
