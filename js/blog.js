// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "SoulSync: Pioneering AI for Cognitive Wellness",
        date: "February 9, 2024",
        category: "Achievement",
        image: "images/blog/1720937570476.jpeg",
        excerpt: "Bits n Bytes secured 1st Runner-Up at the IBM watsonx Challenge during the International GenAI Conclave with SoulSync, an AI-powered companion for cognitive wellness.",
        content: `
            <div class="post-header">
                <img src="images/blog/1720937570476.jpeg" alt="Team Bits n Bytes" class="post-main-image">
                <div class="post-meta">
                    <span class="post-date">February 9, 2024</span>
                    <span class="post-category">Achievement</span>
                </div>
                <h2>A Triumph at the IBM watsonx Challenge</h2>
            </div>
            
            <div class="post-body">
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
            </div>
        `
    },
    {
        id: 2,
        title: "Making History: IEEE R10 Outstanding Volunteer Award",
        date: "February 15, 2024",
        category: "Achievement",
        image: "images/blog/1731994207232.jpeg",
        excerpt: "A historic milestone as the first student to receive the prestigious IEEE Region 10 Student Activities Committee Best Outstanding Volunteer Award.",
        content: `
            <div class="post-header">
                <img src="images/blog/1731994207232.jpeg" alt="IEEE R10 Outstanding Volunteer Award" class="post-main-image">
                <div class="post-meta">
                    <span class="post-date">February 15, 2024</span>
                    <span class="post-category">Achievement</span>
                </div>
                <h2>A Historic Recognition of Dedication & Leadership</h2>
            </div>
            
            <div class="post-body">
                <p>I am deeply honored to receive the IEEE Region 10 Student Activities Committee Best Outstanding Volunteer Award 🏆—a recognition that marks a historic milestone as the first student in history to receive this prestigious honor. This award reflects my journey of growth, leadership, and impact within the IEEE community.</p>

                <h3>A Journey of Empowerment & Innovation</h3>
                <p>As Chairman of IEEE Sahrdaya SB, I have been privileged to:</p>
                <ul>
                    <li>Organize 116+ events engaging over 400+ members, fostering innovation, collaboration, and professional growth</li>
                    <li>Drive membership growth, creating a thriving and engaged IEEE community</li>
                    <li>Secure over $7,500 in funding and a $4,500 travel grant, empowering students with opportunities</li>
                    <li>Conduct STEM outreach programs for pre-university students, inspiring young minds</li>
                </ul>

                <h3>Gratitude & Acknowledgments</h3>
                <p>This award is a testament to the incredible support from my mentors, peers, and the IEEE community. A special thanks to:</p>
                <p>Shone Jose, Anil Antony, Krishnapriya K, Derick Davies, Hridaya Suresh, Devika T V, Vivek K J, and everyone who has believed in me.</p>
                <p>IEEE India Council, IEEE Kerala Section, IEEE Computer Society, and IEEE Sahrdaya SB for their constant encouragement and support.</p>
                <p>Above all, I express my heartfelt gratitude to God Almighty for His grace and guidance.</p>

                <h3>Looking Forward</h3>
                <p>This recognition fuels my passion to continue leading, learning, and making a difference. Together, let's drive innovation and build a brighter future through IEEE and technology! 🚀</p>

                <div class="tags">
                    <span class="tag">#IEEE</span>
                    <span class="tag">#R10VolunteerAward</span>
                    <span class="tag">#Leadership</span>
                    <span class="tag">#Innovation</span>
                    <span class="tag">#Gratitude</span>
                </div>
            </div>
        `
    }
];

// Initialize blog functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeModal();
    attachReadMoreListeners();
    loadImages();
    initializeTheme();
    initializeMobileMenu();
});

// Initialize modal functionality
function initializeModal() {
    const modal = document.querySelector('.post-modal');
    const closeBtn = document.querySelector('.close-modal');
    const modalOverlay = document.querySelector('.modal-overlay');

    if (!modal || !closeBtn || !modalOverlay) return;

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        closeModal(modal);
    });

    // Close modal when clicking outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal(modal);
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal(modal);
        }
    });
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Reset scroll position of modal content
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.scrollTop = 0;
    }
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

    if (!modalContent) return;

    modalContent.innerHTML = post.content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Load images in the modal
    loadImages(modalContent);
}

// Handle image loading
function loadImages(container = document) {
    const images = container.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
            img.addEventListener('error', () => {
                img.src = 'images/placeholder.jpg';
            });
        }
    });
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

// Update theme icon
function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-toggle i');
    if (themeIcon) {
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// Initialize mobile menu
function initializeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuIcon = mobileMenu?.querySelector('i');

    if (mobileMenu && navLinks && mobileMenuIcon) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
            mobileMenuIcon.classList.toggle('fa-bars');
            mobileMenuIcon.classList.toggle('fa-times');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
                mobileMenuIcon.classList.add('fa-bars');
                mobileMenuIcon.classList.remove('fa-times');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !e.target.closest('.mobile-menu') && 
                !e.target.closest('.nav-links')) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
                mobileMenuIcon.classList.add('fa-bars');
                mobileMenuIcon.classList.remove('fa-times');
                document.body.style.overflow = '';
            }
        });
    }
} 