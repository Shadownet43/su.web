// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // Initialize all components
    try {
        console.log('Initializing components...');
        initHeaderScroll();
        initPreloader();
        initCustomCursor();
        initScrollProgress();
        initMobileMenu();
        initScrollAnimations();
        initParticles();
        initContactForm();
        initFAQ();
        initCounters();
        console.log('All components initialized successfully');
    } catch (error) {
        console.error('Error initializing components:', error);
    }
});

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// Preloader
function initPreloader() {
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    });

    // Add hover effect to all clickable elements
    const clickables = document.querySelectorAll('a, button, .hover-effect');
    clickables.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('expand');
            cursorFollower.classList.add('expand');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('expand');
            cursorFollower.classList.remove('expand');
        });
    });
}

// Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.transform = `scaleX(${scrolled / 100})`;
    });
}

// Mobile Menu
function initMobileMenu() {
    console.log('Initializing mobile menu...');
    
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (!menuToggle || !nav) {
        console.error('Menu elements not found');
        return;
    }

    // Handle both click and touch events
    const toggleMenu = function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Menu toggle clicked/touched');
        
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Toggle body scroll
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    };

    // Add both click and touch events
    menuToggle.addEventListener('click', toggleMenu);
    menuToggle.addEventListener('touchend', toggleMenu);

    // Close menu when clicking/touching links
    nav.querySelectorAll('a').forEach(link => {
        const closeMenu = () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        };
        
        link.addEventListener('click', closeMenu);
        link.addEventListener('touchend', closeMenu);
    });

    // Close menu when clicking/touching outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('touchend', (e) => {
        if (nav.classList.contains('active') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Scroll Animations using Intersection Observer
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Particle Animation
function initParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random size
    const size = Math.random() * 6 + 3;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random animation
    particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
    
    container.appendChild(particle);
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            try {
                // Show loading state
                const submitButton = form.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Mengirim...';
                submitButton.disabled = true;
                
                // Simulate API call (replace with actual API endpoint)
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Show success message
                alert('Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.');
                
                // Reset form
                form.reset();
                
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
            } catch (error) {
                console.error('Error:', error);
                alert('Maaf, terjadi kesalahan. Silakan coba lagi nanti.');
            }
        });
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Section
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const icon = item.querySelector('.toggle-icon');
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector('.toggle-icon');
                    if (otherIcon) otherIcon.textContent = '+';
                }
            });
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                icon.textContent = '−';
            } else {
                icon.textContent = '+';
            }
        });
    });
}

// Social Media Stats Counter Animation
function animateCount(elementId, finalCount) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    const numberPart = text.split(' ')[0];
    const suffix = text.includes('K') ? ' K' : '';
    
    let currentCount = 0;
    const duration = 2000; // ms
    const frameDuration = 1000/60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const countIncrement = parseFloat(numberPart) / totalFrames;
    
    let frame = 0;
    
    const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        let currentValue = Math.floor(countIncrement * frame);
        
        if (progress >= 1) {
            clearInterval(counter);
            currentValue = numberPart;
        }
        
        element.innerHTML = `${currentValue}${suffix}<span class="plus">+</span>`;
        
        if (frame === totalFrames) {
            clearInterval(counter);
        }
    }, frameDuration);
}

// Initialize counters when they come into view
function initCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    animateCount('subscriber-count', 25);
                    animateCount('instagram-count', 10);
                    animateCount('discord-count', 3);
                    animateCount('whatsapp-count', 2);
                }, 500);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.social-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
} 