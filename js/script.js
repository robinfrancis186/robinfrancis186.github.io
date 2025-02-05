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
    
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    mobileMenuIcon.classList.toggle('fa-bars');
    mobileMenuIcon.classList.toggle('fa-times');
    
    // Prevent body scroll when menu is open
    body.style.overflow = isOpen ? '' : 'hidden';
    
    // Add active class to current section link
    if (!isOpen) {
        updateActiveNavLink();
    }
}

mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileMenu();
});

// Close mobile menu when clicking a link
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        toggleMobileMenu();
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

// Smooth scrolling with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu after clicking a link
            navLinks.classList.remove('active');
            mobileMenuIcon.classList.add('fa-bars');
            mobileMenuIcon.classList.remove('fa-times');
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            if (entry.target.classList.contains('skills-container')) {
                animateSkills(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .card').forEach((element) => {
    observer.observe(element);
});

// Form handling with enhanced validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Remove any existing messages
        clearFormMessages();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = Object.fromEntries(formData);
        
        // Validate all fields
        const validationErrors = validateForm(formObject);
        
        if (validationErrors.length > 0) {
            validationErrors.forEach(error => {
                showFormMessage(error, 'error');
            });
            return;
        }
        
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        try {
            // Simulate server request (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Success
            showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
            this.reset();
            
            // Reset button after success
            submitButton.innerHTML = '<i class="fas fa-check"></i> Sent!';
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }, 2000);
            
        } catch (error) {
            console.error('Form submission error:', error);
            showFormMessage('There was an error sending your message. Please try again.', 'error');
            
            // Reset button after error
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }
    });
}

// Form validation
function validateForm(formData) {
    const errors = [];
    
    // Name validation
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Please enter a valid name (minimum 2 characters)');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    // Message validation
    if (!formData.message || formData.message.trim().length < 10) {
        errors.push('Please enter a message (minimum 10 characters)');
    }
    
    return errors;
}

// Form message handling
function showFormMessage(message, type) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `form-message ${type}`;
    
    const icon = document.createElement('i');
    icon.className = type === 'success' 
        ? 'fas fa-check-circle'
        : 'fas fa-exclamation-circle';
    
    const textSpan = document.createElement('span');
    textSpan.textContent = message;
    
    messageContainer.appendChild(icon);
    messageContainer.appendChild(textSpan);
    
    const form = document.getElementById('contact-form');
    form.insertBefore(messageContainer, form.firstChild);
    
    // Auto-remove success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageContainer.remove();
        }, 5000);
    }
}

// Clear all form messages
function clearFormMessages() {
    const form = document.getElementById('contact-form');
    const messages = form.querySelectorAll('.form-message');
    messages.forEach(message => message.remove());
}

// Skill bars animation
function animateSkills(container) {
    const skillBars = container.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage;
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if URL has a hash and scroll to it
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
});

// Progressive Image Loading
function loadImage(img) {
    const fullSrc = img.dataset.src;
    if (!fullSrc) return;

    const fullImg = new Image();
    fullImg.src = fullSrc;
    fullImg.className = 'full';
    
    fullImg.onload = function() {
        img.parentNode.appendChild(fullImg);
        setTimeout(() => {
            fullImg.classList.add('loaded');
        }, 100);
    };
}

// Initialize progressive images
document.querySelectorAll('.progressive-image img.thumb').forEach(loadImage);

// Project Card Parallax Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(10px)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Glass Card 3D Effect
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;
        
        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(5px)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Timeline Animation Enhancement
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            
            // Animate the connector line
            const connector = entry.target.querySelector('.timeline-connector');
            if (connector) {
                connector.style.height = '100%';
            }
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '-50px'
});

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// Multilingual Name Animation
const multilingualNames = [
    { text: 'Robin Francis', language: 'English' },
    { text: 'റോബിൻ ഫ്രാൻസിസ്', language: 'Malayalam' },
    { text: 'रॉबिन फ्रांसिस', language: 'Hindi' },
    { text: 'ロビン フランシス', language: 'Japanese' },
    { text: 'Robin Franzis', language: 'German' },
    { text: '罗宾·弗朗西斯', language: 'Chinese' }
];

function animateMultilingualName() {
    const nameElement = document.querySelector('.multilingual-name');
    let currentIndex = 0;

    function updateName() {
        const { text, language } = multilingualNames[currentIndex];
        nameElement.textContent = text;
        nameElement.setAttribute('data-language', language);
        nameElement.classList.add('animating');

        setTimeout(() => {
            nameElement.classList.remove('animating');
            currentIndex = (currentIndex + 1) % multilingualNames.length;
            setTimeout(updateName, 500); // Delay before next animation
        }, 3000); // Increased duration for better readability
    }

    updateName();
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateMultilingualName();
    // ... existing DOMContentLoaded code ...
}); 