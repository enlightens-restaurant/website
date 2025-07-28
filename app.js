// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initMenuTabs();
    initContactForm();
    initScrollAnimations();
    initSmoothScrolling();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Active nav link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Menu tabs functionality
function initMenuTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            // Add fade-in animation
            const activeContent = document.getElementById(targetTab);
            activeContent.style.opacity = '0';
            setTimeout(() => {
                activeContent.style.opacity = '1';
                activeContent.classList.add('fade-in');
            }, 50);
        });
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // Basic validation
        if (!validateForm(data)) {
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Hide form and show success message
            contactForm.style.display = 'none';
            formSuccess.classList.remove('hidden');
            
            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Reset form after 5 seconds
            setTimeout(() => {
                contactForm.style.display = 'block';
                formSuccess.classList.add('hidden');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 5000);
        }, 1500);
    });

    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            // Remove error styling on input
            this.classList.remove('error');
            const errorMsg = this.parentNode.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });
}

// Form validation functions
function validateForm(data) {
    let isValid = true;
    const requiredFields = ['name', 'phone', 'email'];

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(msg => msg.remove());
    document.querySelectorAll('.error').forEach(field => field.classList.remove('error'));

    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            showFieldError(field, 'This field is required');
            isValid = false;
        }
    });

    // Email validation
    if (data.email && !isValidEmail(data.email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }

    // Phone validation
    if (data.phone && !isValidPhone(data.phone)) {
        showFieldError('phone', 'Please enter a valid phone number');
        isValid = false;
    }

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;

    // Remove existing errors
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Required field validation
    const requiredFields = ['name', 'phone', 'email'];
    if (requiredFields.includes(fieldName) && !value) {
        showFieldError(fieldName, 'This field is required');
        return false;
    }

    // Email validation
    if (fieldName === 'email' && value && !isValidEmail(value)) {
        showFieldError('email', 'Please enter a valid email address');
        return false;
    }

    // Phone validation
    if (fieldName === 'phone' && value && !isValidPhone(value)) {
        showFieldError('phone', 'Please enter a valid phone number');
        return false;
    }

    return true;
}

function showFieldError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    field.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = 'var(--color-error)';
    errorDiv.style.fontSize = 'var(--font-size-sm)';
    errorDiv.style.marginTop = 'var(--space-4)';
    
    field.parentNode.appendChild(errorDiv);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.about-content, .ambiance-card, .menu-item, .event-card, .gallery-item, .info-item'
    );

    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Stagger animations for grids
    const grids = document.querySelectorAll('.ambiance-grid, .events-grid, .gallery-grid');
    grids.forEach(grid => {
        const items = grid.children;
        Array.from(items).forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Gallery functionality (basic lightbox effect)
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Simple zoom effect
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
}

// Call to action button effects
function initCTAEffects() {
    const ctaButtons = document.querySelectorAll('.btn--primary, .btn--outline');
    
    ctaButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px)';
        });
    });
}

// Phone number click to call
function initPhoneLinks() {
    const phoneNumbers = document.querySelectorAll('[href*="tel:"], .contact-info p');
    phoneNumbers.forEach(phone => {
        if (phone.textContent && phone.textContent.includes('+91-7772095526')) {
            phone.style.cursor = 'pointer';
            phone.addEventListener('click', function() {
                window.open('tel:+917772095526');
            });
        }
    });
}

// Email click to compose
function initEmailLinks() {
    const emails = document.querySelectorAll('.contact-info p, .footer-contact p');
    emails.forEach(email => {
        if (email.textContent && email.textContent.includes('prashantparashar2018@gmail.com')) {
            email.style.cursor = 'pointer';
            email.addEventListener('click', function() {
                window.open('mailto:prashantparashar2018@gmail.com?subject=Inquiry about Enlightens Restaurant');
            });
        }
    });
}

// Initialize additional features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initCTAEffects();
    initPhoneLinks();
    initEmailLinks();
});

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}, 250));

// Preloader (if needed)
window.addEventListener('load', function() {
    // Remove any loading states
    document.body.classList.add('loaded');
});

// Error handling for missing elements
function safeQuerySelector(selector, callback) {
    const element = document.querySelector(selector);
    if (element && typeof callback === 'function') {
        callback(element);
    }
}

function safeQuerySelectorAll(selector, callback) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0 && typeof callback === 'function') {
        callback(elements);
    }
}

// Performance optimization: Lazy loading for images (if images were present)
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Add CSS for error states
const errorStyles = `
    .form-control.error {
        border-color: var(--color-error);
        box-shadow: 0 0 0 3px rgba(var(--color-error-rgb), 0.1);
    }
    
    .error-message {
        color: var(--color-error);
        font-size: var(--font-size-sm);
        margin-top: var(--space-4);
        display: block;
    }
    
    .nav-link.active {
        color: var(--color-gold);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    @media (max-width: 768px) {
        .nav-link.active {
            background: rgba(212, 175, 55, 0.1);
            padding: var(--space-8) var(--space-16);
            border-radius: var(--radius-base);
        }
    }
`;

// Inject error styles
const styleSheet = document.createElement('style');
styleSheet.textContent = errorStyles;
document.head.appendChild(styleSheet);

// Export functions for potential external use
window.EnlightensRestaurant = {
    initNavigation,
    initMenuTabs,
    initContactForm,
    initScrollAnimations,
    initSmoothScrolling
};