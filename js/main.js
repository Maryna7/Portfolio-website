/// Burger menu ///

const menu = document.querySelector(".page-header");
const menuItems = document.querySelectorAll(".nav li");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)

/// Slider ///

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});


/// Back to top anchor ///

let scrollpos = window.scrollY
const header = document.querySelector("header")
const header_height = header.offsetHeight
const body = document.querySelector("body")

const add_class_on_scroll = () => body.classList.add("scroll")
const remove_class_on_scroll = () => body.classList.remove("scroll")

// add class on scroll
window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

})