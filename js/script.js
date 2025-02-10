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

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    // Reset form styles on input
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.style.borderColor = '';
            input.classList.remove('error');
            const errorMessage = input.parentElement.querySelector('.input-error');
            if (errorMessage) {
                errorMessage.remove();
            }
        });
    });

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form elements
        const nameInput = this.querySelector('#name');
        const emailInput = this.querySelector('#email');
        const messageInput = this.querySelector('#message');
        const submitButton = this.querySelector('button[type="submit"]');
        
        // Reset previous error states
        inputs.forEach(input => {
            input.style.borderColor = '';
            input.classList.remove('error');
        });

        // Enhanced validation with visual feedback
        let hasErrors = false;

        // Name validation
        if (!nameInput.value.trim()) {
            showInputError(nameInput, 'Please enter your name');
            nameInput.focus();
            hasErrors = true;
        }

        // Email validation with enhanced regex
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
            showInputError(emailInput, 'Please enter a valid email address');
            if (!hasErrors) {
                emailInput.focus();
                hasErrors = true;
            }
        }

        // Message validation
        if (!messageInput.value.trim()) {
            showInputError(messageInput, 'Please enter your message');
            if (!hasErrors) {
                messageInput.focus();
                hasErrors = true;
            }
        }

        if (hasErrors) return;

        // Show loading state with enhanced animation
        submitButton.disabled = true;
        submitButton.classList.add('loading');
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        try {
            // Send email using EmailJS
            const response = await emailjs.sendForm(
                'service_e5srsha',
                'template_yddco1b',
                contactForm,
                'hBekDdvbPkt-p8Ka_'
            );

            if (response.status === 200) {
                showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
                contactForm.reset();
                
                // Add success animation to button
                submitButton.classList.add('success');
                submitButton.innerHTML = '<i class="fas fa-check"></i> Sent!';
                
                // Reset button state after delay
                setTimeout(() => {
                    submitButton.classList.remove('success');
                    submitButton.innerHTML = 'Send Message';
                }, 2000);
            } else {
                throw new Error('Failed to send message');
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            showFormMessage('Failed to send message. Please try again or contact directly via email.', 'error');
            submitButton.classList.add('error');
        } finally {
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
            if (!submitButton.classList.contains('success')) {
                submitButton.innerHTML = 'Send Message';
            }
        }
    });
}

// Enhanced form message display
function showFormMessage(message, type) {
    const existingMessages = document.querySelectorAll('.form-message');
    existingMessages.forEach(msg => {
        msg.classList.add('fade-out');
        setTimeout(() => msg.remove(), 300);
    });

    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    const form = document.getElementById('contact-form');
    form.insertBefore(messageElement, form.firstChild);

    // Animate message in
    setTimeout(() => messageElement.classList.add('show'), 10);

    if (type === 'success') {
        setTimeout(() => {
            messageElement.classList.add('fade-out');
            setTimeout(() => messageElement.remove(), 300);
        }, 5000);
    }
}

// New function to show input-specific errors
function showInputError(input, message) {
    input.style.borderColor = '#ef4444';
    input.classList.add('error');
    
    // Remove existing error message if any
    const existingError = input.parentElement.querySelector('.input-error');
    if (existingError) {
        existingError.remove();
    }

    // Create and add new error message
    const errorMessage = document.createElement('div');
    errorMessage.className = 'input-error';
    errorMessage.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    input.parentElement.appendChild(errorMessage);

    // Smooth scroll to error
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Enhanced email validation
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Initialize EmailJS
(function() {
    emailjs.init("hBekDdvbPkt-p8Ka_");
})();

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

// Navigation and Scroll Handling
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('section[id]');

    // Mobile menu toggle
    mobileMenuBtn?.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.mobile-menu')) {
            nav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Handle internal anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const headerOffset = 80;
                    const targetPosition = targetSection.offsetTop - headerOffset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            
            // Close mobile menu in any case
            nav.classList.remove('active');
            mobileMenuBtn?.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Update active link based on scroll position
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initial update of active link
    updateActiveNavLink();
});

// Section Animation Observer
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '-50px'
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Page Transition
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to all images that are already loaded
    document.querySelectorAll('img').forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
});

// Smooth scroll with header offset
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
        }
    });
});

// Pixel Transition Effect
class PixelTransition {
    constructor(element, options = {}) {
        this.element = element;
        this.options = {
            gridCols: options.gridCols || 20,
            gridRows: options.gridRows || 10,
            duration: options.duration || 800,
            delay: options.delay || 20,
            ...options
        };
        this.init();
    }

    init() {
        // Create pixel transition container
        this.container = document.createElement('div');
        this.container.className = 'pixel-transition gpu-accelerated';
        this.element.parentNode.insertBefore(this.container, this.element);
        this.container.appendChild(this.element);

        // Create pixel grid
        this.grid = document.createElement('div');
        this.grid.className = 'pixel-grid';
        this.grid.style.setProperty('--grid-cols', this.options.gridCols);
        this.grid.style.setProperty('--grid-rows', this.options.gridRows);
        this.container.appendChild(this.grid);

        // Create pixels
        this.createPixels();
    }

    createPixels() {
        const totalPixels = this.options.gridCols * this.options.gridRows;
        const shuffledIndices = Array.from({length: totalPixels}, (_, i) => i)
            .sort(() => Math.random() - 0.5);

        for (let i = 0; i < totalPixels; i++) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel optimize-animation';
            this.grid.appendChild(pixel);

            // Animate pixels with random delay
            setTimeout(() => {
                pixel.style.transform = 'scale(1)';
                setTimeout(() => {
                    pixel.style.transform = 'scale(0)';
                }, this.options.duration);
            }, shuffledIndices[i] * this.options.delay);
        }
    }

    animate() {
        // Clear existing pixels
        this.grid.innerHTML = '';
        // Create new animation
        this.createPixels();
    }
}

// Initialize pixel transition
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title.multilingual-name');
    if (heroTitle) {
        const transition = new PixelTransition(heroTitle, {
            gridCols: 25,
            gridRows: 15,
            duration: 1000,
            delay: 15
        });

        // Animate on hover
        heroTitle.addEventListener('mouseenter', () => {
            transition.animate();
        });
    }

    // Optimize performance for animations
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        element.classList.add('gpu-accelerated');
    });
});

// Optimize scroll performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        requestAnimationFrame(() => {
            updateActiveNavLink();
            scrollTimeout = null;
        });
        scrollTimeout = true;
    }
}, { passive: true });

// Optimize image loading
const lazyLoadImages = () => {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
};

// Initialize optimizations
document.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    
    // Add performance optimization classes
    document.querySelectorAll('.hero-section, .post-card, .glass-card').forEach(element => {
        element.classList.add('gpu-accelerated', 'optimize-animation');
    });
}); 