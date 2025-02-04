// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = Object.fromEntries(formData);
        
        // You would typically send this data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add scroll-based animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach((section) => {
    section.style.opacity = '0';
    section.style.transition = 'opacity 0.5s ease-in-out';
    observer.observe(section);
});

// Add fade-in class for initial animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add('fade-in');
        }
    });
}); 