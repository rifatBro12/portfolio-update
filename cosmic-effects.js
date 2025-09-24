// Cosmic Effects JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cosmic effects initialized!');
    
    // Initialize navigation menu system
    initNavigationMenu();
    
    // Initialize particle effects
    initParticleEffects();
    
    // Initialize interactive elements
    initInteractiveElements();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize cosmic background
    createDynamicBackground();
});

// Navigation Menu System
function initNavigationMenu() {
    const menuToggle = document.querySelector('.nav-menu-toggle');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-menu-list a');
    
    if (menuToggle && navOverlay) {
        // Toggle menu on button click
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navOverlay.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.className = 'fas fa-times';
                document.body.style.overflow = 'hidden';
            } else {
                icon.className = 'fas fa-bars';
                document.body.style.overflow = '';
            }
            
            // Add star burst effect
            createStarBurst(this);
        });
        
        // Close menu when clicking overlay background
        navOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeNavigationMenu();
            }
        });
        
        // Handle navigation link clicks
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
                
                // Get target section
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                // Close menu first
                closeNavigationMenu();
                
                // Scroll to section after menu closes
                setTimeout(() => {
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 300);
                
                // Add click effect
                createStarBurst(this);
            });
        });
        
        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navOverlay.classList.contains('active')) {
                closeNavigationMenu();
            }
        });
    }
    
    // Function to close navigation menu
    function closeNavigationMenu() {
        menuToggle.classList.remove('active');
        navOverlay.classList.remove('active');
        
        const icon = menuToggle.querySelector('i');
        icon.className = 'fas fa-bars';
        document.body.style.overflow = '';
    }
}

// Particle effects
function initParticleEffects() {
    // Mouse trail effect
    let mouseTrail = [];
    document.addEventListener('mousemove', function(e) {
        mouseTrail.push({
            x: e.clientX,
            y: e.clientY,
            time: Date.now()
        });
        
        // Keep only recent trail points
        mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 1000);
        
        // Create particle at mouse position occasionally
        if (Math.random() < 0.08) {
            createMouseParticle(e.clientX, e.clientY);
        }
    });
    
    // Create floating particles periodically
    createFloatingParticles();
}

// Interactive elements
function initInteractiveElements() {
    // Add glitch effect to logo on hover
    const logo = document.querySelector('.aside .logo a');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.classList.add('glitch');
            this.setAttribute('data-text', this.textContent);
        });
        
        logo.addEventListener('mouseleave', function() {
            this.classList.remove('glitch');
        });
    }
    
    // Add hover effects to navigation items
    const navLinks = document.querySelectorAll('.aside .nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            createStarBurst(this);
        });
    });
    
    // Add coding instrument hover effects
    const codingInstruments = document.querySelectorAll('.coding-instrument');
    codingInstruments.forEach(instrument => {
        instrument.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(15deg)';
            this.style.textShadow = '0 0 30px currentColor';
            this.style.transition = 'all 0.3s ease';
        });
        
        instrument.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.textShadow = '';
        });
        
        // Add click effect to coding instruments
        instrument.addEventListener('click', function() {
            createCodeBurst(this);
        });
    });
    
    // Add portfolio item hover effects
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Add button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createStarBurst(this);
            
            // Add ripple effect
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('div');
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                animation: ripple 0.6s linear;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add glitch effect to section titles
                if (entry.target.classList.contains('section-title')) {
                    const h2 = entry.target.querySelector('h2');
                    if (h2) {
                        h2.classList.add('glitch');
                        h2.setAttribute('data-text', h2.textContent);
                        
                        setTimeout(() => {
                            h2.classList.remove('glitch');
                        }, 3000);
                    }
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.section-title, .service-item, .portfolio-item, .about-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Utility functions
function createStarBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 3px;
            height: 3px;
            background: linear-gradient(45deg, #6366f1, #8b5cf6, #f59e0b);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${centerX}px;
            top: ${centerY}px;
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 80;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 800,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    }
}

function createCodeBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const codeSymbols = [
        'import', 'def', 'class', 'numpy', 'pandas', 'sklearn', 
        'tf.keras', 'model.fit()', 'predict()', 'neural_net',
        'AI', 'ML', 'Deep Learning', 'CNN', 'RNN', 'robot.move()',
        'sensor.read()', 'algorithm', 'matrix', 'vector'
    ];
    
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        const symbol = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
        
        particle.style.cssText = `
            position: fixed;
            font-family: 'Courier New', monospace;
            font-size: ${symbol.length > 8 ? '12px' : '14px'};
            font-weight: bold;
            color: ${getComputedStyle(element).color};
            pointer-events: none;
            z-index: 9999;
            left: ${centerX}px;
            top: ${centerY}px;
            text-shadow: 0 0 15px currentColor;
            white-space: nowrap;
        `;
        
        particle.textContent = symbol;
        document.body.appendChild(particle);
        
        const angle = (i / 6) * Math.PI * 2;
        const distance = 70;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${endX - centerX}px, ${endY - centerY}px) scale(0.5)`, opacity: 0 }
        ], {
            duration: 1500,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    }
}

function createFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(particleContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        const colors = ['#6366f1', '#8b5cf6', '#f59e0b', 'rgba(255, 255, 255, 0.6)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${color};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: 100%;
            box-shadow: 0 0 10px ${color};
        `;
        
        particleContainer.appendChild(particle);
        
        const duration = Math.random() * 15000 + 8000;
        const drift = (Math.random() - 0.5) * 200;
        
        particle.animate([
            { transform: 'translateY(0) translateX(0)', opacity: 0 },
            { transform: `translateY(-50vh) translateX(${drift/2}px)`, opacity: 1 },
            { transform: `translateY(-120vh) translateX(${drift}px)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'linear'
        }).onfinish = () => particle.remove();
    }
    
    // Create particles periodically
    setInterval(createParticle, 800);
}

function createMouseParticle(x, y) {
    const particle = document.createElement('div');
    const colors = ['#6366f1', '#8b5cf6', '#f59e0b'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
        position: fixed;
        width: 3px;
        height: 3px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        left: ${x}px;
        top: ${y}px;
        box-shadow: 0 0 8px ${color};
    `;
    
    document.body.appendChild(particle);
    
    const drift = (Math.random() - 0.5) * 40;
    
    particle.animate([
        { transform: `translate(0, 0) scale(1)`, opacity: 1 },
        { transform: `translate(${drift}px, -20px) scale(0)`, opacity: 0 }
    ], {
        duration: 1200,
        easing: 'ease-out'
    }).onfinish = () => particle.remove();
}

// Dynamic background canvas
function createDynamicBackground() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    
    function createCanvasParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.3 + 0.1,
            color: `hsl(${Math.random() * 60 + 220}, 70%, 70%)`
        };
    }
    
    // Initialize particles
    for (let i = 0; i < 30; i++) {
        particles.push(createCanvasParticle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color.replace('70%)', `${particle.opacity})`);
            ctx.fill();
            
            // Draw connections to nearby particles
            particles.forEach(other => {
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);