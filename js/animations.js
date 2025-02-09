// Names in different languages
const names = [
    { text: 'Robin', language: 'English' },
    { text: 'ロビン', language: 'Japanese' },
    { text: '로빈', language: 'Korean' },
    { text: 'روبن', language: 'Arabic' },
    { text: 'रॉबिन', language: 'Hindi' },
    { text: 'Робин', language: 'Russian' },
    { text: '罗宾', language: 'Chinese' },
    { text: 'Ρόμπιν', language: 'Greek' },
    { text: 'רובין', language: 'Hebrew' },
    { text: 'Robín', language: 'Spanish' },
    { text: 'Робін', language: 'Ukrainian' },
    { text: 'Robbie', language: 'Dutch' },
    { text: 'Robinho', language: 'Portuguese' },
    { text: 'Ροβινος', language: 'Greek' },
    { text: 'ராபின்', language: 'Tamil' },
    { text: 'റോബിൻ', language: 'Malayalam' },
    { text: 'રોબિન', language: 'Gujarati' },
    { text: 'ରବିନ', language: 'Odia' },
    { text: 'ರಾಬಿನ್', language: 'Kannada' },
    { text: 'రాబిన్', language: 'Telugu' },
    { text: 'রবিন', language: 'Bengali' },
    { text: 'Робін', language: 'Belarusian' },
    { text: 'Робин', language: 'Bulgarian' },
    { text: 'روبین', language: 'Persian' }
];

// Simple Loading Animation
const loadingScreen = document.querySelector('.loading-screen');

// Initialize loading animation
window.addEventListener('load', () => {
    // Simple fade out loading screen
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000);
});

// Essential hover animations
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'translateY(-3px)';
    });

    link.addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'translateY(0)';
    });
});

// Simple scroll reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: '-50px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for simple fade in
document.querySelectorAll('.mission-content, .about-content, .timeline-item, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    scrollObserver.observe(el);
});

// Page Animations
function initPageAnimations() {
    // Hero section animations
    anime({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1500,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.hero-subtitle span',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(200),
        duration: 800,
        easing: 'easeOutExpo'
    });

    // Social links animation
    anime({
        targets: '.social-link',
        scale: [0, 1],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'spring(1, 80, 10, 0)'
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-50px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('mission-content')) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateY: [50, 0],
                        duration: 1000,
                        easing: 'easeOutExpo'
                    });
                }

                if (entry.target.classList.contains('about-content')) {
                    anime({
                        targets: entry.target.querySelectorAll('.highlight-item'),
                        scale: [0.8, 1],
                        opacity: [0, 1],
                        delay: anime.stagger(200),
                        duration: 800,
                        easing: 'spring(1, 80, 10, 0)'
                    });
                }

                if (entry.target.classList.contains('timeline-item')) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateX: [-50, 0],
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                }

                if (entry.target.classList.contains('project-card')) {
                    anime({
                        targets: entry.target,
                        scale: [0.9, 1],
                        opacity: [0, 1],
                        duration: 1000,
                        easing: 'easeOutExpo'
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.mission-content, .about-content, .timeline-item, .project-card').forEach(el => {
        scrollObserver.observe(el);
    });
}

// Navigation hover effect
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        anime({
            targets: e.target,
            color: getComputedStyle(document.documentElement).getPropertyValue('--accent-primary'),
            duration: 300,
            easing: 'easeOutExpo'
        });
    });

    link.addEventListener('mouseleave', (e) => {
        anime({
            targets: e.target,
            color: getComputedStyle(document.documentElement).getPropertyValue('--text-primary'),
            duration: 300,
            easing: 'easeOutExpo'
        });
    });
}); 