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
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form elements
        const nameInput = this.querySelector('#name');
        const emailInput = this.querySelector('#email');
        const messageInput = this.querySelector('#message');
        const submitButton = this.querySelector('button[type="submit"]');
        
        // Validate inputs
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

        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        try {
            // Prepare form data
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim()
            };

            // Send email using EmailJS
            await emailjs.send(
                'service_rgqppvs', // Your EmailJS service ID
                'template_yddco1b', // Your EmailJS template ID
                formData,
                'hBekDdvbPkt-p8Ka_'
            );

            // Show success message
            showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
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
    // Remove any existing messages
    const existingMessages = document.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());

    // Create new message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    // Insert message at the top of the form
    const form = document.getElementById('contact-form');
    form.insertBefore(messageElement, form.firstChild);

    // Auto-remove success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
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