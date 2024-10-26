// Toggle the hamburger menu
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // Show or hide the nav on click
}

// Optional: Smooth scrolling (in case you want to use JS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
