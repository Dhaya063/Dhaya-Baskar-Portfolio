// Toggle Nav bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');

    // Adjust section position when the navigation bar is active
    if (navbar.classList.contains('active')) {
        sections.forEach((section) => {
            section.style.transform = 'translateY(' + navbar.offsetHeight + 'px)';
        });
    } else {
        sections.forEach((section) => {
            section.style.transform = 'translateY(0)';
        });
    }
};
