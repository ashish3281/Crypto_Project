document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.question button');
  const searchInput = document.getElementById('search-input');
  const faqList = document.getElementById('faq-list');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const faq = button.nextElementSibling;
      const icon = button.querySelector('.d-arrow');

      faq.classList.toggle('show');
      icon.classList.toggle('rotate');
    });
  });

  const searchFAQ = function() {
    const searchTerm = searchInput.value.toLowerCase();
    const faqs = faqList.querySelectorAll('.question');

    faqs.forEach(faq => {
      const questionText = faq.querySelector('span').textContent.toLowerCase();
      const answerText = faq.querySelector('p').textContent.toLowerCase();

      if (
        questionText.includes(searchTerm) ||
        answerText.includes(searchTerm)
      ) {
        faq.style.display = 'block';
      } else {
        faq.style.display = 'none';
      }
    });
  };

  searchInput.addEventListener('input', searchFAQ);
});





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






