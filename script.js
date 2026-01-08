document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling for anchor links (optional as CSS scroll-behavior usually handles it, but this adds more control if needed)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Form Submission (Frontend only)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! Our team will contact you securely.');
        form.reset();
    });
});
