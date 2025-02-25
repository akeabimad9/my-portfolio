// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Alert (Mockup)
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
});

