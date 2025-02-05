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

// Loading Animation
let currentNameIndex = 0;
const nameText = document.querySelector('.name-text');
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');
const loadingScreen = document.querySelector('.loading-screen');

function animateLoadingName() {
    if (currentNameIndex >= names.length) {
        return;
    }

    const name = names[currentNameIndex];
    nameText.textContent = `${name.text} (${name.language})`;

    anime({
        targets: '.name-text',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
        easing: 'easeOutExpo',
        complete: () => {
            setTimeout(() => {
                anime({
                    targets: '.name-text',
                    opacity: 0,
                    translateY: 20,
                    duration: 800,
                    easing: 'easeInExpo',
                    complete: () => {
                        currentNameIndex++;
                        if (currentNameIndex < names.length) {
                            animateLoadingName();
                        }
                    }
                });
            }, 1000);
        }
    });
}

// Initialize loading animation
window.addEventListener('load', () => {
    animateLoadingName();
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                anime({
                    targets: '.loading-screen',
                    opacity: 0,
                    duration: 800,
                    easing: 'easeInOutQuad',
                    complete: () => {
                        loadingScreen.style.display = 'none';
                        initPageAnimations();
                    }
                });
            }, 1000);
        }
    }, 50);
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

// Hover animations
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        anime({
            targets: e.target,
            scale: 1.2,
            duration: 400,
            easing: 'easeOutElastic(1, .8)'
        });
    });

    link.addEventListener('mouseleave', (e) => {
        anime({
            targets: e.target,
            scale: 1,
            duration: 400,
            easing: 'easeOutElastic(1, .8)'
        });
    });
});

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