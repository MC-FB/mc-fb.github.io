// Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    // Simulate loading time
    setTimeout(function() {
        loadingOverlay.classList.add('hidden');
    }, 1500);
    
    // Initialize other functionality
    initNavigation();
    initBlogFilters();
    initNewsletterForms();
    initAnchors();
});

// Navigation Active State
function initNavigation() {
    const currentLocation = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === currentLocation || (href === 'index.html' && currentLocation === '')) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Blog Post Filtering
function initBlogFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter blog posts
                blogPosts.forEach(post => {
                    const category = post.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        post.style.display = 'block';
                        post.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        post.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Newsletter Form Handling
function initNewsletterForms() {
    const forms = document.querySelectorAll('.newsletter-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // Simulate form submission
                emailInput.value = '';
                showNotification('Thank you for subscribing! Check your email for confirmation.');
            }
        });
    });
}

// Anchor Link Scrolling
function initAnchors() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.background = 'linear-gradient(135deg, var(--secondary-color), var(--tertiary-color))';
    notification.style.color = 'var(--light-text)';
    notification.style.padding = '1rem 2rem';
    notification.style.borderRadius = '50px';
    notification.style.boxShadow = '0 5px 15px rgba(0, 212, 255, 0.3)';
    notification.style.zIndex = '9999';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-20px)';
    notification.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth Scrolling for All Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href !== '#') {
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '30px';
backToTopBtn.style.right = '30px';
backToTopBtn.style.background = 'linear-gradient(135deg, var(--secondary-color), var(--tertiary-color))';
backToTopBtn.style.color = 'var(--light-text)';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '50%';
backToTopBtn.style.width = '50px';
backToTopBtn.style.height = '50px';
backToTopBtn.style.fontSize = '1.5rem';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.boxShadow = '0 5px 15px rgba(0, 212, 255, 0.3)';
backToTopBtn.style.opacity = '0';
backToTopBtn.style.transition = 'opacity 0.3s ease';
backToTopBtn.style.zIndex = '1000';

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.style.opacity = '1';
    } else {
        backToTopBtn.style.opacity = '0';
    }
    
    // Add header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Responsive Navigation (for future mobile menu)
function initResponsiveNav() {
    // This can be expanded for mobile hamburger menu
    const nav = document.querySelector('.nav');
    const navList = document.querySelector('.nav-list');
    
    // For now, just ensure proper spacing
    if (window.innerWidth <= 768) {
        navList.style.flexDirection = 'column';
        navList.style.gap = '0.5rem';
    }
}

// Initialize responsive navigation
initResponsiveNav();
window.addEventListener('resize', initResponsiveNav);

// Add CSS-in-JS for dynamic elements that need CSS variables
const style = document.createElement('style');
style.textContent = `
    .notification {
        background: linear-gradient(135deg, var(--secondary-color), var(--tertiary-color)) !important;
        color: var(--light-text) !important;
        box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3) !important;
    }
    
    .back-to-top {
        background: linear-gradient(135deg, var(--secondary-color), var(--tertiary-color)) !important;
        color: var(--light-text) !important;
        box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3) !important;
    }
    
    .back-to-top:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 212, 255, 0.4) !important;
    }
`;
document.head.appendChild(style);