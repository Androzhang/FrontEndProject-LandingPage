/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 * select all selections in order to create the nav bar dynamically
 * find the navBar
*/
const navSection = document.querySelectorAll('section');
const navBar = document.querySelector('#navbar__list');

// build the nav
navSection.forEach (function(sectionData) {
  // DEBUG:
  //debugger;
  //get section data and create a
  var navbarA= document.createElement('a');
  navbarA.setAttribute("href", "#" + sectionData.id);
  navbarA.setAttribute("class", sectionData.className);
  navbarA.textContent = sectionData.dataset.nav;
  //navbarA.addEventListener('click', respondToTheClick);
  //get section data and create li
  var navbarLi= document.createElement('li');
  navbarLi.setAttribute("data-link", sectionData.id);
  //append a to li
  navbarLi.appendChild(navbarA);
  //append li to nav ul
  navBar.appendChild(navbarLi);
});

// function respondToTheClick(e) {
//   if (document.querySelector('#navbar__list a.active') !== null) {
//     document.querySelector('#navbar__list a.active').classList.remove('active');
//   }
//   e.target.className = "active";
// }
// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", function (e){
  //debugger;
  var fromTop = window.scrollY;
  //debugger;
  var NavLinks = document.querySelectorAll("nav li a");
  NavLinks.forEach(function (a){
    var section = document.querySelector(a.hash);
    if (section.offsetTop <= fromTop + 1 && section.offsetTop + section.offsetHeight - 1 > fromTop) {
      a.classList.add("active");
      section.classList.add("active");
    } else {
      a.classList.remove("active");
      section.classList.remove("active");
    }
  });
});
