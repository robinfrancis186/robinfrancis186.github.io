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
    loadingScreen.style.display = 'none';
});

// Remove hover animations
document.querySelectorAll('.social-link').forEach(link => {
    link.style.transform = 'none';
});

// Simple scroll reveal - remove animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '-50px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
        }
    });
}, observerOptions);

// Observe elements without animations
document.querySelectorAll('.mission-content, .about-content, .timeline-item, .project-card').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.transition = 'none';
});

// Remove Page Animations
function initPageAnimations() {
    // Remove all animations
}

// Remove Navigation hover effects
document.querySelectorAll('.nav-links a').forEach(link => {
    link.style.transition = 'none';
    link.style.transform = 'none';
}); 