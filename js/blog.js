// Blog posts data structure
const blogPosts = [
    {
        id: 1,
        title: "SoulSync: Pioneering AI for Cognitive Wellness",
        date: "2024-02-09",
        image: "images/blog/1720937570476.jpeg",
        description: "Bits n Bytes secured 1st Runner-Up at the IBM watsonx Challenge during the International GenAI Conclave with SoulSync, an AI-powered companion for cognitive wellness.",
        content: `
            <div class="blog-images">
                <img src="images/blog/1720937570476.jpeg" alt="Team Bits n Bytes" class="blog-content-image">
                <img src="images/blog/1720937571684.jpeg" alt="Award Ceremony" class="blog-content-image">
                <img src="images/blog/1720937573469.jpeg" alt="Project Presentation" class="blog-content-image">
                <img src="images/blog/1720937580394.jpeg" alt="Team with Mentors" class="blog-content-image">
            </div>

            <h2>A Triumph at the IBM watsonx Challenge</h2>
            <p>We are thrilled to announce that Bits n Bytes secured 1st Runner-Up at the prestigious IBM watsonx Challenge during the International GenAI Conclave! Our innovation, SoulSync, is an AI-powered companion designed to enhance memory, cognitive function, and emotional well-being in the elderly through personalized storytelling and intelligent reminders.</p>

            <h3>The Vision Behind SoulSync</h3>
            <p>Aging presents challenges such as memory loss and emotional isolation. SoulSync aims to address these through:</p>
            <ul>
                <li>Personalized storytelling to evoke nostalgia and strengthen cognitive function.</li>
                <li>AI-driven reminders for medications, appointments, and daily tasks.</li>
                <li>Empathetic conversations to provide companionship and emotional support.</li>
            </ul>

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

            <div class="tags">#GenerativeAI #Innovation #Hackathon #TeamBitsNBytes #SoulSync #AIForGood #IBM</div>
        `
    },
    {
        id: 2,
        title: "Virtual Mouse Project Update",
        date: "2024-02-07",
        image: "images/blog/1720937571684.jpeg",
        description: "An innovative virtual mouse application that combines hand gesture recognition with voice control for a hands-free computer interface.",
        content: `
            <div class="blog-images">
                <img src="images/blog/1720937571684.jpeg" alt="Virtual Mouse Demo" class="blog-content-image">
            </div>
            <h2>Virtual Mouse: Redefining Computer Interaction</h2>
            <p>Our latest update brings significant improvements to the Virtual Mouse project, making computer interaction more intuitive and accessible than ever.</p>
            <div class="tags">#VirtualMouse #Innovation #ComputerVision #Accessibility</div>
        `
    },
    {
        id: 3,
        title: "QuestionPro Development",
        date: "2024-02-07",
        image: "images/blog/1720937573469.jpeg",
        description: "A comprehensive survey platform designed to simplify online survey creation and analysis with advanced features and analytics.",
        content: `
            <div class="blog-images">
                <img src="images/blog/1720937573469.jpeg" alt="QuestionPro Platform" class="blog-content-image">
            </div>
            <h2>QuestionPro: Revolutionizing Survey Management</h2>
            <p>Experience the future of survey management with our enhanced QuestionPro platform, featuring advanced analytics and user-friendly interface.</p>
            <div class="tags">#QuestionPro #SurveyPlatform #Analytics #UX</div>
        `
    }
];

let currentPostIndex = 0;

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to create blog card
function createBlogCard(post) {
    return `
        <div class="blog-card" data-id="${post.id}">
            <img src="${post.image}" alt="${post.title}" class="blog-image" loading="lazy">
            <div class="blog-content">
                <p class="blog-date">${formatDate(post.date)}</p>
                <h2 class="blog-title">${post.title}</h2>
                <p class="blog-description">${post.description}</p>
                <a href="#" class="blog-read-more">
                    Read More <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
}

// Function to render blog posts
function renderBlogPosts() {
    const blogContainer = document.querySelector('.blog-posts');
    if (!blogContainer) return;
    
    const blogHTML = blogPosts.map(post => createBlogCard(post)).join('');
    blogContainer.innerHTML = blogHTML;

    // Add click event listeners to blog cards
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = parseInt(card.dataset.id);
            const postIndex = blogPosts.findIndex(post => post.id === postId);
            if (postIndex !== -1) {
                openGalleryModal(postIndex);
            }
        });
    });
}

// Initialize blog posts
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    initializeViewToggle();
    initializeModalControls();
});

// View toggle functionality
function initializeViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const blogPostsContainer = document.querySelector('.blog-posts');

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const view = button.dataset.view;
            
            // Update active button
            viewButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update view
            blogPostsContainer.classList.toggle('gallery-view', view === 'gallery');
        });
    });
}

// Modal functionality
function initializeModalControls() {
    const modal = document.querySelector('.gallery-modal');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.gallery-prev');
    const nextBtn = document.querySelector('.gallery-next');

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    prevBtn.addEventListener('click', () => navigateGallery('prev'));
    nextBtn.addEventListener('click', () => navigateGallery('next'));
}

function openGalleryModal(index) {
    currentPostIndex = index;
    const post = blogPosts[index];
    const modal = document.querySelector('.gallery-modal');
    
    document.getElementById('gallery-image').src = post.image;
    document.getElementById('gallery-title').textContent = post.title;
    document.getElementById('gallery-date').textContent = formatDate(post.date);
    document.getElementById('gallery-description').textContent = post.description;
    
    const modalContent = document.querySelector('.gallery-info .modal-content') || 
                        document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.innerHTML = post.content;
    
    const galleryInfo = document.querySelector('.gallery-info');
    if (!document.querySelector('.gallery-info .modal-content')) {
        galleryInfo.appendChild(modalContent);
    }
    
    modal.classList.add('active');
}

function navigateGallery(direction) {
    currentPostIndex = direction === 'prev'
        ? (currentPostIndex - 1 + blogPosts.length) % blogPosts.length
        : (currentPostIndex + 1) % blogPosts.length;
    openGalleryModal(currentPostIndex);
}

// Function to add a new blog post
function addBlogPost(post) {
    // Generate a new ID
    const newId = blogPosts.length > 0 ? Math.max(...blogPosts.map(p => p.id)) + 1 : 1;
    
    // Add the new post with the generated ID
    const newPost = {
        id: newId,
        ...post
    };
    
    blogPosts.unshift(newPost); // Add to the beginning of the array
    renderBlogPosts(); // Re-render the blog posts
}

// Example of how to add a new blog post:
/*
addBlogPost({
    title: "New Blog Post",
    date: "2024-02-07",
    image: "images/blog/new-post.jpg",
    description: "Description of the new blog post",
    content: "Full content of the new blog post..."
});
*/ 