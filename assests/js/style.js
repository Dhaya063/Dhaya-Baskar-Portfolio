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




// Developer Transition

    // document.addEventListener('DOMContentLoaded', function() {
    //     // Delay the changing of text for a smooth effect
    //     setTimeout(function() {
    //         var roleSpan = document.getElementById('developer-role');
    //         roleSpan.textContent = 'Web Developer';
    //     }, 500); // Adjust the delay time as needed (in milliseconds)
    // });

    // document.addEventListener('DOMContentLoaded', function() {
    //     var roles = ["Software", "Web","Java Full-Stack"];
    //     var roleSpan = document.getElementById('developer-role');
    //     var currentIndex = 0;

    //     setInterval(function() {
    //         currentIndex = (currentIndex + 1) % roles.length;
    //         roleSpan.textContent = roles[currentIndex];
    //     }, 2000); // Change every 2 seconds (2000 milliseconds)
    // });

