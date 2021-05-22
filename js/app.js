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

 // Query all sections and store the list in variable.
const sections = document.querySelectorAll('section');

 // Get the navbar element by it's Id to use it in the buildNavBar function and scrollToSection function
const navBar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Begin Main Functions
 * 
 */

// build the nav
function buildNavBar() {
    // Creating new fragment to append the newly created navigation bar
    const fragment = document.createDocumentFragment();

    // The for each loops over the sections list
    sections.forEach(function (section) {
        const listItem = document.createElement('li'); // Creating new list item element 
        const anchor = document.createElement('a'); // Creacting new anchor element
        const Id = section.getAttribute('id'); // Gettting the id from the current section to add it to the list item
        const name = section.getAttribute('data-nav'); // Get the name of the section from each section
        const text = document.createTextNode(name); // Creating text node from the name we got from the section
        anchor.appendChild(text); // Add the text to the anchor element
        anchor.setAttribute('data-id', Id); // Add new attribute "id" to the anchor element 
        anchor.classList.add('menu__link'); // Add to the class list of the anchor the class "menu__link" to change the style
        listItem.appendChild(anchor); // Add the anchor inside the list item element 
        fragment.appendChild(listItem); // Add the list item element inside the fragment
    });

    // Add the fragment containing all the list items we added to it to the navigation bar
    navBar.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function activeSection() {
    // Adding an event listener in the case of scrolling any where in the document
    document.addEventListener('scroll', function () {

        // The for each loops over the sections list
        sections.forEach(function (section) {
            const position = section.getBoundingClientRect(); // Method providing information about the size of an element and its position relative to the viewport. 

            /*
               The condition to check if the current section is in viewport or not.
               If it's in the view port it will add a class to the class list of current section to edit it's style, 
               else it will remove this class from the class list. 
            */
            if ((position.top >= 0 && position.left >= 0 && position.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            position.right <= (window.innerWidth || document.documentElement.clientWidth))) {
                section.classList.add("your-active-class");
            } else {
                section.classList.remove("your-active-class");
            }
        })
    })
}


// Scroll to anchor ID using scrollTO event
function scrollToSection() {
    // The for each loops over the sections list
    sections.forEach(function (section) {  

        // Adding an event listener in the case of clicking in the navigation bar
        navBar.addEventListener('click', function (section) {
            const targetSection = document.getElementById(section.target.getAttribute('data-id')) // Gets the id of the section that it's link has been clicked
            targetSection.scrollIntoView({ behavior: "smooth" }) // Method scrolls to the section that it's link has been clicked
        });
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Just calling all the functions

// Build menu 
buildNavBar()

// Scroll to section on link click
scrollToSection();

// Set sections as active
activeSection();