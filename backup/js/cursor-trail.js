class CursorTrailEffect {
    constructor() {
        this.root = document.body;
        this.cursor = document.createElement("div");
        this.cursor.classList.add("cursor-trail");
        
        this.particles = [];
        this.particlePointer = 0;
        this.numParticles = 15; // Reduced number of particles for better performance

        // Store previous positions for smooth trailing
        this.positions = Array(this.numParticles).fill().map(() => ({ x: 0, y: 0 }));
        
        // Create particles
        for (let i = 0; i < this.numParticles; i++) {
            const particle = document.createElement("div");
            particle.classList.add("cursor-particle");
            this.root.appendChild(particle);
            this.particles.push(particle);
        }

        // Initialize variables for smooth animation
        this.position = { x: 0, y: 0 };
        this.mouse = { x: 0, y: 0 };
        this.speed = 0.65; // Increased speed for closer following
        this.lastScrollY = window.scrollY;
        this.lastMouseX = 0;
        this.lastMouseY = 0;

        // Initialize particle colors
        this.updateParticleColors();

        // Add event listeners
        this.init();
        this.render();
    }

    init() {
        document.addEventListener("mousemove", (event) => {
            // Update mouse position considering scroll
            this.mouse.x = event.clientX;
            this.mouse.y = event.clientY + window.scrollY;
            
            // Update last known positions
            this.lastMouseX = this.mouse.x;
            this.lastMouseY = this.mouse.y;
        });

        window.addEventListener("scroll", () => {
            // Update particles position on scroll
            const scrollDiff = window.scrollY - this.lastScrollY;
            this.particles.forEach((particle, index) => {
                this.positions[index].y += scrollDiff;
                particle.style.transform = `translate(${this.positions[index].x}px, ${this.positions[index].y}px)`;
            });
            this.lastScrollY = window.scrollY;
            this.mouse.y = this.lastMouseY + window.scrollY;
        });

        // Handle theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    this.updateParticleColors();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }

    updateParticleColors() {
        const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
        
        // Default colors if CSS variables are not available
        const defaultLight = { r: 37, g: 99, b: 235 }; // #2563eb
        const defaultDark = { r: 96, g: 165, b: 250 }; // #60a5fa
        
        const startColor = isDarkTheme ? defaultDark : defaultLight;
        const endColor = isDarkTheme ? defaultLight : defaultDark;
        
        this.particles.forEach((particle, index) => {
            const progress = index / this.numParticles;
            const r = Math.round(startColor.r + (endColor.r - startColor.r) * progress);
            const g = Math.round(startColor.g + (endColor.g - startColor.g) * progress);
            const b = Math.round(startColor.b + (endColor.b - startColor.b) * progress);
            
            particle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            particle.style.opacity = isDarkTheme ? '0.3' : '0.2';
            particle.style.width = `${8 - (index * 0.2)}px`; // Smaller particles
            particle.style.height = `${8 - (index * 0.2)}px`; // Smaller particles
        });
    }

    render() {
        // Update current position
        this.position.x += (this.mouse.x - this.position.x) * this.speed;
        this.position.y += (this.mouse.y - this.position.y) * this.speed;

        // Update particle positions with trailing effect
        this.positions.unshift({ x: this.position.x, y: this.position.y });
        this.positions.pop();

        // Update particles
        this.particles.forEach((particle, index) => {
            const position = this.positions[index];
            particle.style.transform = `translate(${position.x}px, ${position.y}px)`;
            particle.style.opacity = (1 - index / this.numParticles) * 0.5;
        });

        requestAnimationFrame(() => this.render());
    }
}

// Initialize the cursor trail effect
if (!window.matchMedia('(hover: none)').matches) {
    document.addEventListener('DOMContentLoaded', () => {
        new CursorTrailEffect();
    });
} 