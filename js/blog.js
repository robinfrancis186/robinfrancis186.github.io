// Blog posts data structure
let blogPosts = [
    {
        id: 1,
        title: "Virtual Mouse Project Update",
        date: "2024-02-07",
        image: "images/virtual-mouse.jpg",
        description: "An innovative virtual mouse application that combines hand gesture recognition with voice control for a hands-free computer interface.",
        content: "Full blog post content about the Virtual Mouse project development and features..."
    },
    {
        id: 2,
        title: "QuestionPro Development",
        date: "2024-02-07",
        image: "images/questionpro.jpg",
        description: "A comprehensive survey platform designed to simplify online survey creation and analysis with advanced features and analytics.",
        content: "Full blog post content about the QuestionPro platform development..."
    }
];

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
    blogContainer.innerHTML = blogPosts.map(post => createBlogCard(post)).join('');
}

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
let currentPostIndex = 0;

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

// Initialize blog posts
renderBlogPosts();

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