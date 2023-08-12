window.addEventListener("load", function () {
    var popup = document.querySelector(".popup");

    // Check if the user has interacted with the check image (using localStorage)
    var hasInteractedWithImage = localStorage.getItem("hasInteractedWithImage");

    if (!hasInteractedWithImage) {
        setTimeout(function open(event) {
            popup.style.opacity = "1";
            popup.style.display = "block";
            fadeIn(popup, 300);
            document.body.classList.add("popup-visible");
        }, 1000);
    }
});

document.querySelector("#close").addEventListener("click", function () {
    var popup = document.querySelector(".popup");
    fadeOut(popup, 300);
    setTimeout(function () {
        popup.style.display = "none";
        document.body.classList.remove("popup-visible");
    }, 300);
});

// Handle the check image click
document.querySelector(".check-image").addEventListener("click", function () {
    localStorage.setItem("hasInteractedWithImage", "true");
});


// Function to fade in an element
function fadeIn(element, duration) {
  var opacity = 0;
  var interval = 10;
  var gap = interval / duration;

  element.style.display = "block";
  element.style.opacity = opacity;

  function increaseOpacity() {
      opacity += gap;

      if (opacity >= 1) {
          clearInterval(fading);
      }

      element.style.opacity = opacity;
  }

  var fading = setInterval(increaseOpacity, interval);
}

// Function to fade out an element
function fadeOut(element, duration) {
  var opacity = 1;
  var interval = 10;
  var gap = interval / duration;

  function decreaseOpacity() {
      opacity -= gap;

      if (opacity <= 0) {
          clearInterval(fading);
          element.style.display = "none";
      }

      element.style.opacity = opacity;
  }

  var fading = setInterval(decreaseOpacity, interval);
}

'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * toggle active on add to fav
 */

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);



/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);






