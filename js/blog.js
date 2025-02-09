// Blog posts data structure
let blogPosts = [
    {
        id: 1,
        title: "SoulSync: Pioneering AI for Cognitive Wellness",
        date: "2024-02-09",
        image: "images/blog/1720937570476.jpeg",
        description: "Bits n Bytes secured 1st Runner-Up at the IBM watsonx Challenge during the International GenAI Conclave with SoulSync, an AI-powered companion for cognitive wellness.",
        content: `
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
            <p>Together, we combined expertise in AI, cognitive science, and user experience to bring SoulSync to life.</p>

            <h3>Acknowledgments</h3>
            <p>We extend our heartfelt gratitude to our mentors and supporters:</p>
            <p>Carl Francis, Roshini Varma, Srinivasan Muthuswamy, Anbumunee P., Latha Raj, Kamitha Jairaj, Sarika Nair, Utpalendra Kumar Deka, and Anil Antony</p>
            <p>Sahrdaya College of Engineering & Technology (SCET) for their unwavering support and encouragement.</p>

            <h3>The Road Ahead</h3>
            <p>This achievement fuels our commitment to advancing SoulSync and broadening its impact. We envision a future where AI redefines companionship and cognitive support, empowering individuals to lead enriched lives.</p>
            <p>Stay tuned as we continue our journey of innovation!</p>

            <p class="tags">#GenerativeAI #Innovation #Hackathon #TeamBitsNBytes #SoulSync #AIForGood #IBM</p>
        `
    },
    {
        id: 2,
        title: "Virtual Mouse Project Update",
        date: "2024-02-07",
        image: "images/blog/1720937571684.jpeg",
        description: "An innovative virtual mouse application that combines hand gesture recognition with voice control for a hands-free computer interface.",
        content: "Full blog post content about the Virtual Mouse project development and features..."
    },
    {
        id: 3,
        title: "QuestionPro Development",
        date: "2024-02-07",
        image: "images/blog/1720937573469.jpeg",
        description: "A comprehensive survey platform designed to simplify online survey creation and analysis with advanced features and analytics.",
        content: "Full blog post content about the QuestionPro platform development..."
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
            <img src="${post.image}" alt="${post.title}" class="blog-image">
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
    if (blogContainer) {
        blogContainer.innerHTML = blogPosts.map(post => createBlogCard(post)).join('');
    }
}

// Initialize blog posts immediately and on DOMContentLoaded
renderBlogPosts();
document.addEventListener('DOMContentLoaded', renderBlogPosts);

// View toggle functionality
const viewButtons = document.querySelectorAll('.view-btn');
const blogPostsContainer = document.querySelector('.blog-posts');

viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const view = button.dataset.view;
        
        // Update active button
        viewButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update view
        if (view === 'gallery') {
            blogPostsContainer.classList.add('gallery-view');
        } else {
            blogPostsContainer.classList.remove('gallery-view');
        }
    });
});

// Gallery modal functionality
const modal = document.querySelector('.gallery-modal');
const modalImage = document.getElementById('gallery-image');
const modalTitle = document.getElementById('gallery-title');
const modalDate = document.getElementById('gallery-date');
const modalDescription = document.getElementById('gallery-description');
const modalContent = document.createElement('div');
modalContent.className = 'modal-content';
document.querySelector('.gallery-info').appendChild(modalContent);

// Open modal
document.addEventListener('click', (e) => {
    const blogCard = e.target.closest('.blog-card');
    if (blogCard) {
        const postId = parseInt(blogCard.dataset.id);
        const postIndex = blogPosts.findIndex(post => post.id === postId);
        if (postIndex !== -1) {
            openGalleryModal(postIndex);
        }
    }
});

// Close modal
document.querySelector('.close-modal').addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Navigation buttons
document.querySelector('.gallery-prev').addEventListener('click', () => {
    navigateGallery('prev');
});

document.querySelector('.gallery-next').addEventListener('click', () => {
    navigateGallery('next');
});

function openGalleryModal(index) {
    currentPostIndex = index;
    const post = blogPosts[index];
    
    modalImage.src = post.image;
    modalTitle.textContent = post.title;
    modalDate.textContent = formatDate(post.date);
    modalDescription.textContent = post.description;
    modalContent.innerHTML = post.content;
    
    modal.classList.add('active');
}

function navigateGallery(direction) {
    if (direction === 'prev') {
        currentPostIndex = (currentPostIndex - 1 + blogPosts.length) % blogPosts.length;
    } else {
        currentPostIndex = (currentPostIndex + 1) % blogPosts.length;
    }
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