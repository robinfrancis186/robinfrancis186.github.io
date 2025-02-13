class CursorTrailEffect {
    constructor() {
        this.root = document.body;
        this.cursor = document.createElement("div");
        this.cursor.classList.add("cursor-trail");
        
        this.particles = [];
        this.particlePointer = 0;
        this.numParticles = 20;

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
        this.speed = 0.2;
        this.lastScrollY = window.scrollY;

        // Add event listeners
        this.init();
        this.render();
    }

    init() {
        document.addEventListener("mousemove", (event) => {
            // Update mouse position considering scroll
            this.mouse.x = event.clientX;
            this.mouse.y = event.clientY + window.scrollY;
        });

        window.addEventListener("scroll", () => {
            // Update particles position on scroll
            const scrollDiff = window.scrollY - this.lastScrollY;
            this.particles.forEach(particle => {
                const top = parseFloat(particle.style.top) || 0;
                particle.style.top = `${top + scrollDiff}px`;
            });
            this.lastScrollY = window.scrollY;
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
        const gradientStart = getComputedStyle(document.documentElement).getPropertyValue('--gradient-start').trim();
        const gradientEnd = getComputedStyle(document.documentElement).getPropertyValue('--gradient-end').trim();
        
        this.particles.forEach((particle, index) => {
            const progress = index / this.numParticles;
            const color = this.interpolateColors(gradientStart, gradientEnd, progress);
            particle.style.backgroundColor = color;
            particle.style.opacity = isDarkTheme ? '0.3' : '0.2';
        });
    }

    interpolateColors(color1, color2, factor) {
        if (color1.startsWith('#')) {
            color1 = color1.substring(1);
        }
        if (color2.startsWith('#')) {
            color2 = color2.substring(1);
        }
        
        const r1 = parseInt(color1.substring(0, 2), 16);
        const g1 = parseInt(color1.substring(2, 4), 16);
        const b1 = parseInt(color1.substring(4, 6), 16);
        
        const r2 = parseInt(color2.substring(0, 2), 16);
        const g2 = parseInt(color2.substring(2, 4), 16);
        const b2 = parseInt(color2.substring(4, 6), 16);
        
        const r = Math.round(r1 + (r2 - r1) * factor);
        const g = Math.round(g1 + (g2 - g1) * factor);
        const b = Math.round(b1 + (b2 - b1) * factor);
        
        return `rgb(${r}, ${g}, ${b})`;
    }

    render() {
        // Smooth position updating
        this.position.x += (this.mouse.x - this.position.x) * this.speed;
        this.position.y += (this.mouse.y - this.position.y) * this.speed;

        // Update particles
        const particle = this.particles[this.particlePointer];
        particle.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;
        particle.style.opacity = '0.5';
        
        setTimeout(() => {
            particle.style.opacity = '0';
        }, 100);

        this.particlePointer = (this.particlePointer + 1) % this.numParticles;

        requestAnimationFrame(() => this.render());
    }
}

// Initialize the cursor trail effect
document.addEventListener('DOMContentLoaded', () => {
    new CursorTrailEffect();
}); 