// Initialize GSAP animations
document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animations
    initHeroAnimations();
    
    // Section Animations
    initSectionAnimations();
    
    // Card Animations
    initCardAnimations();
    
    // Text Animations
    initTextAnimations();
    
    // Parallax Effects
    initParallaxEffects();
});

// Hero Section Animations
function initHeroAnimations() {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;
    
    gsap.from(heroContent.children, {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });
    
    // Mandala animation - simplified
    gsap.to('.mandala-animation', {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: "none"
    });
}

// Section Animations
function initSectionAnimations() {
    // About section
    const aboutSection = document.querySelector('.values-grid');
    if (aboutSection) {
        gsap.set('.value-card', { opacity: 1, y: 0 }); // Ensure cards are visible by default
        gsap.from('.value-card', {
            scrollTrigger: {
                trigger: '.values-grid',
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });
    }
    
    // Programs section
    const programsSection = document.querySelector('.programs-grid');
    if (programsSection) {
        gsap.set('.program-card', { opacity: 1, y: 0 }); // Ensure cards are visible by default
        gsap.from('.program-card', {
            scrollTrigger: {
                trigger: '.programs-grid',
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });
    }
    
    // Mentors section
    const mentorsSection = document.querySelector('.mentors-grid');
    if (mentorsSection) {
        gsap.set('.mentor-card', { opacity: 1, y: 0 }); // Ensure cards are visible by default
        gsap.from('.mentor-card', {
            scrollTrigger: {
                trigger: '.mentors-grid',
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });
    }

    // Initialize section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        gsap.set(header, { opacity: 1, y: 0 }); // Ensure headers are visible by default
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    });
}

// Card Animations - Simplified
function initCardAnimations() {
    const cards = document.querySelectorAll('.program-card, .value-card, .mentor-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -5,
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });
}

// Text Animations - Simplified
function initTextAnimations() {
    const headlines = document.querySelectorAll('h1, h2');
    
    headlines.forEach(headline => {
        ScrollTrigger.create({
            trigger: headline,
            start: "top 80%",
            onEnter: () => {
                gsap.from(headline, {
                    y: 30,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            },
            once: true
        });
    });
}

// Parallax Effects
function initParallaxEffects() {
    // Background parallax
    gsap.to('.bg-animate', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
    
    // Section background parallax
    document.querySelectorAll('.section-transition').forEach(section => {
        gsap.to(section, {
            backgroundPositionY: "50%",
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });
}

// Smooth Scroll Animation
function smoothScroll(target) {
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: target,
            autoKill: false
        },
        ease: "power3.inOut"
    });
}

// Initialize scroll animations for elements with data-scroll attribute
function initScrollBasedAnimations() {
    const elements = document.querySelectorAll('[data-scroll]');
    
    elements.forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });
}

// Add scroll-based animations to specific elements
document.addEventListener('DOMContentLoaded', function() {
    initScrollBasedAnimations();
}); 