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
 * 
*/
const navElement = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');


// build the nav
navElement.forEach (function(e) {
   const navbarItem = 
   `<li class='menu__link ${e.className}' data-link=${e.id}> 
     <a href="#${e.id}">  ${e.dataset.nav}  </li>`;
    navBar.insertAdjacentHTML('beforeend',navbarItem);
});

// Scroll to section on link click
navBar.addEventListener('click',function(l) {
    l.preventDefault();
    const parent = l.target.hasAttribute('data-link')? 
        l.target: l.target.parentElement;
    const elementToScrollTo = document.getElementById(parent.dataset.link);
    elementToScrollTo.scrollIntoView({block: 'end', behavior: 'auto'});
});

