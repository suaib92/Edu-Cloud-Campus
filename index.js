// Get the button element
const backToTopButton = document.getElementById('back-to-top');

// Add an event listener for scrolling
window.addEventListener('scroll', () => {
    // Check the scroll position
    if (window.scrollY > 200) { // Show button when scrolled down 200px
        backToTopButton.style.display = 'flex'; // Show the button
    } else {
        backToTopButton.style.display = 'none'; // Hide the button
    }
});

// Optional: Smooth scrolling behavior for the Back to Top button
backToTopButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
