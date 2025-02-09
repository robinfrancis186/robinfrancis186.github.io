// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "SoulSync: Pioneering AI for Cognitive Wellness",
        date: "February 9, 2024",
        category: "Achievement",
        excerpt: "Bits n Bytes secured 1st Runner-Up at the IBM watsonx Challenge during the International GenAI Conclave with SoulSync, an AI-powered companion for cognitive wellness.",
        content: `
            <img src="images/blog/1720937570476.jpeg" alt="Team Bits n Bytes">
            
            <h2>A Triumph at the IBM watsonx Challenge</h2>
            <p>We are thrilled to announce that Bits n Bytes secured 1st Runner-Up at the prestigious IBM watsonx Challenge during the International GenAI Conclave! Our innovation, SoulSync, is an AI-powered companion designed to enhance memory, cognitive function, and emotional well-being in the elderly through personalized storytelling and intelligent reminders.</p>

            <h3>The Vision Behind SoulSync</h3>
            <p>Aging presents challenges such as memory loss and emotional isolation. SoulSync aims to address these through:</p>
            <ul>
                <li>Personalized storytelling to evoke nostalgia and strengthen cognitive function</li>
                <li>AI-driven reminders for medications, appointments, and daily tasks</li>
                <li>Empathetic conversations to provide companionship and emotional support</li>
            </ul>

            <div class="image-grid">
                <img src="images/blog/1720937571684.jpeg" alt="Award Ceremony">
                <img src="images/blog/1720937573469.jpeg" alt="Project Presentation">
                <img src="images/blog/1720937580394.jpeg" alt="Team with Mentors">
            </div>

            <h3>Meet Team Bits n Bytes</h3>
            <p>This accomplishment was made possible by our dedicated team:</p>
            <ul>
                <li>Joel Jaison</li>
                <li>Vivek K J</li>
                <li>Adwaith Jayasankar</li>
            </ul>

            <h3>Acknowledgments</h3>
            <p>We extend our heartfelt gratitude to our mentors and supporters:</p>
            <p>Carl Francis, Roshini Varma, Srinivasan Muthuswamy, Anbumunee P., Latha Raj, Kamitha Jairaj, Sarika Nair, Utpalendra Kumar Deka, and Anil Antony</p>
            <p>Sahrdaya College of Engineering & Technology (SCET) for their unwavering support and encouragement.</p>

            <div class="tags">
                <span class="tag">#GenerativeAI</span>
                <span class="tag">#Innovation</span>
                <span class="tag">#Hackathon</span>
                <span class="tag">#TeamBitsNBytes</span>
                <span class="tag">#SoulSync</span>
                <span class="tag">#AIForGood</span>
                <span class="tag">#IBM</span>
            </div>
        `
    },
    {
        id: 2,
        title: "Virtual Mouse Project Update",
        date: "February 7, 2024",
        category: "Project",
        excerpt: "An innovative virtual mouse application that combines hand gesture recognition with voice control for a hands-free computer interface.",
        content: `
            <img src="images/blog/1720937571684.jpeg" alt="Virtual Mouse Demo">
            
            <h2>Virtual Mouse: Redefining Computer Interaction</h2>
            <p>Our latest update brings significant improvements to the Virtual Mouse project, making computer interaction more intuitive and accessible than ever.</p>

            <h3>Key Features</h3>
            <ul>
                <li>Real-time hand gesture recognition</li>
                <li>Voice command integration</li>
                <li>Customizable gesture mappings</li>
                <li>Accessibility-first design</li>
            </ul>

            <div class="tags">
                <span class="tag">#VirtualMouse</span>
                <span class="tag">#Innovation</span>
                <span class="tag">#ComputerVision</span>
                <span class="tag">#Accessibility</span>
            </div>
        `
    },
    {
        id: 3,
        title: "QuestionPro Development",
        date: "February 7, 2024",
        category: "Development",
        excerpt: "A comprehensive survey platform designed to simplify online survey creation and analysis with advanced features and analytics.",
        content: `
            <img src="images/blog/1720937573469.jpeg" alt="QuestionPro Platform">
            
            <h2>QuestionPro: Revolutionizing Survey Management</h2>
            <p>Experience the future of survey management with our enhanced QuestionPro platform, featuring advanced analytics and user-friendly interface.</p>

            <h3>Platform Highlights</h3>
            <ul>
                <li>Intuitive survey builder</li>
                <li>Real-time analytics dashboard</li>
                <li>Advanced response visualization</li>
                <li>Multi-platform compatibility</li>
            </ul>

            <div class="tags">
                <span class="tag">#QuestionPro</span>
                <span class="tag">#SurveyPlatform</span>
                <span class="tag">#Analytics</span>
                <span class="tag">#UX</span>
            </div>
        `
    }
];

// Initialize blog functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeModal();
    attachReadMoreListeners();
});

// Initialize modal functionality
function initializeModal() {
    const modal = document.querySelector('.post-modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalOverlay = document.querySelector('.modal-overlay');

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close modal when clicking outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Attach click listeners to read more buttons
function attachReadMoreListeners() {
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = parseInt(button.dataset.post);
            openPost(postId);
        });
    });
}

// Open post in modal
function openPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    const modal = document.querySelector('.post-modal');
    const modalContent = modal.querySelector('.modal-content');

    modalContent.innerHTML = post.content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Handle image loading
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
}); 