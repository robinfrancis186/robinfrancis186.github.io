// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Mobile Menu Handling
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const mobileMenuIcon = mobileMenu.querySelector('i');
const body = document.body;

function toggleMobileMenu() {
    const isOpen = navLinks.classList.contains('active');
    
    if (isOpen) {
        navLinks.classList.remove('active');
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('fa-bars');
        body.style.overflow = '';
    } else {
        navLinks.classList.add('active');
        mobileMenuIcon.classList.remove('fa-bars');
        mobileMenuIcon.classList.add('fa-times');
        body.style.overflow = 'hidden';
    }
}

mobileMenu.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
});

// Close mobile menu when clicking a link
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        toggleMobileMenu();
        
        if (href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'auto'
                });
            }
        } else {
            window.location.href = href;
        }
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !e.target.closest('.mobile-menu') && 
        !e.target.closest('.nav-links')) {
        toggleMobileMenu();
    }
});

// Prevent scroll when mobile menu is open
document.addEventListener('touchmove', (e) => {
    if (navLinks.classList.contains('active')) {
        e.preventDefault();
    }
}, { passive: false });

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight/3)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Initialize active nav link on page load
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// Basic scrolling without smooth behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition
            });

            navLinks.classList.remove('active');
            mobileMenuIcon.classList.add('fa-bars');
            mobileMenuIcon.classList.remove('fa-times');
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const nameInput = this.querySelector('#name');
        const emailInput = this.querySelector('#email');
        const messageInput = this.querySelector('#message');
        const submitButton = this.querySelector('button[type="submit"]');
        
        if (!nameInput.value.trim()) {
            showFormMessage('Please enter your name', 'error');
            nameInput.focus();
            return;
        }

        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            showFormMessage('Please enter a valid email address', 'error');
            emailInput.focus();
            return;
        }

        if (!messageInput.value.trim()) {
            showFormMessage('Please enter your message', 'error');
            messageInput.focus();
            return;
        }

        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';

        try {
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim()
            };

            await emailjs.send(
                'service_rgqppvs',
                'template_yddco1b',
                formData,
                'hBekDdvbPkt-p8Ka_'
            );

            showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
            contactForm.reset();
            submitButton.innerHTML = 'Send Message';
            submitButton.disabled = false;

        } catch (error) {
            console.error('Form submission error:', error);
            showFormMessage('Failed to send message. Please try again.', 'error');
            submitButton.innerHTML = 'Send Message';
            submitButton.disabled = false;
        }
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form message display helper
function showFormMessage(message, type) {
    const existingMessages = document.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());

    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    const form = document.getElementById('contact-form');
    form.insertBefore(messageElement, form.firstChild);

    if (type === 'success') {
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition
            });
        }
    }
}); 