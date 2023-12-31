const navMenu = document.querySelectorAll(".nav__li");
const checkBox = document.getElementById("check");
const search = document.getElementById("search");
const close = document.getElementById("close");
const searchContainer = document.getElementById("searchContainer");

const searchToggle = document.querySelectorAll(".nav__search--icon, .nav__search--close");

for (let i = 0; i < searchToggle.length; i++) {
  searchToggle[i].addEventListener("click", function () {
    search.classList.toggle("nav__search--text--toggle");
    close.classList.toggle("nav__search--close--toggle");
    searchContainer.classList.toggle("nav__search--toggle");
  });
}

// BUTTON MENU BURGER

const mobileButton = document.getElementById("mobileButton");
const mobileClose = document.getElementById("mobileClose");
const mobileMenu = document.getElementById("mobileMenu");

mobileButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("mobileMenu--toggle");
});
mobileClose.addEventListener("click", function () {
  mobileMenu.classList.toggle("mobileMenu--toggle");
});
