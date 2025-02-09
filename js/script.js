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

let isMenuOpen = false;

function toggleMobileMenu(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    isMenuOpen = !isMenuOpen;
    
    navLinks.classList.toggle('active', isMenuOpen);
    mobileMenuIcon.classList.toggle('fa-times', isMenuOpen);
    mobileMenuIcon.classList.toggle('fa-bars', !isMenuOpen);
    body.style.overflow = isMenuOpen ? 'hidden' : '';
    
    // Update ARIA attributes
    mobileMenu.setAttribute('aria-expanded', isMenuOpen);
    navLinks.setAttribute('aria-hidden', !isMenuOpen);
    
    // Trap focus within menu when open
    if (isMenuOpen) {
        trapFocus(navLinks);
    }
}

// Set up mobile menu
function initializeMobileMenu() {
    // Add ARIA attributes
    mobileMenu.setAttribute('role', 'button');
    mobileMenu.setAttribute('aria-label', 'Toggle navigation menu');
    mobileMenu.setAttribute('aria-controls', 'nav-links');
    mobileMenu.setAttribute('aria-expanded', 'false');
    
    navLinks.setAttribute('role', 'navigation');
    navLinks.setAttribute('aria-label', 'Main navigation');
    navLinks.setAttribute('aria-hidden', 'true');
    
    // Add event listeners
    mobileMenu.addEventListener('click', toggleMobileMenu);
    
    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMobileMenu();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isMenuOpen && 
            !e.target.closest('.mobile-menu') && 
            !e.target.closest('.nav-links')) {
            toggleMobileMenu();
        }
    });
    
    // Prevent scroll on touch when menu is open
    document.addEventListener('touchmove', (e) => {
        if (isMenuOpen && !e.target.closest('.nav-links')) {
            e.preventDefault();
        }
    }, { passive: false });
}

// Focus trap for accessibility
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
    
    firstFocusable.focus();
}

// Initialize mobile menu
initializeMobileMenu();

// Handle navigation links
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        
        if (isMenuOpen) {
            toggleMobileMenu();
        }
        
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
                
                // Update URL without smooth scroll
                history.pushState(null, '', href);
            }
        } else {
            window.location.href = href;
        }
    }
});

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
        
        // Clear previous messages
        const existingMessages = document.querySelectorAll('.form-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Reset input states
        [nameInput, emailInput, messageInput].forEach(input => {
            input.classList.remove('error');
        });
        
        // Validate inputs
        let hasError = false;
        
        if (!nameInput.value.trim()) {
            showFormMessage('Please enter your name', 'error');
            nameInput.classList.add('error');
            nameInput.focus();
            hasError = true;
        }

        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            showFormMessage('Please enter a valid email address', 'error');
            emailInput.classList.add('error');
            if (!hasError) {
                emailInput.focus();
            }
            hasError = true;
        }

        if (!messageInput.value.trim()) {
            showFormMessage('Please enter your message', 'error');
            messageInput.classList.add('error');
            if (!hasError) {
                messageInput.focus();
            }
            hasError = true;
        }

        if (hasError) return;

        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim(),
                timestamp: new Date().toISOString()
            };

            const response = await emailjs.send(
                'service_rgqppvs',
                'template_yddco1b',
                formData,
                'hBekDdvbPkt-p8Ka_'
            );

            if (response.status === 200) {
                showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Failed to send message');
            }

        } catch (error) {
            console.error('Form submission error:', error);
            showFormMessage('Failed to send message. Please try again later.', 'error');
        } finally {
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        }
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
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
    form.insertAdjacentElement('afterbegin', messageElement);
    
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