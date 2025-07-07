// Footer loader for dynamic footer component
document.addEventListener('DOMContentLoaded', function() {
    loadFooter();
});

function loadFooter() {
    // Try multiple possible paths for the footer file
    const possiblePaths = [
        'assets/components/footer.html',
        './assets/components/footer.html',
        '../assets/components/footer.html',
        '../../assets/components/footer.html'
    ];
    
    tryLoadFooter(possiblePaths, 0);
}

function tryLoadFooter(paths, index) {
    if (index >= paths.length) {
        console.error('Footer file not found in any of the expected locations');
        return;
    }
    
    const currentPath = paths[index];
    console.log('Trying to load footer from:', currentPath);
    
    fetch(currentPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log('Footer loaded successfully from:', currentPath);
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
                
                // Small delay to ensure DOM is updated before initializing
                setTimeout(() => {
                    initializeFooter();
                }, 100);
            }
        })
        .catch(error => {
            console.log(`Failed to load footer from ${currentPath}:`, error.message);
            // Try next path
            tryLoadFooter(paths, index + 1);
        });
}

function initializeFooter() {
    // Initialize background styling for footer
    initializeFooterBackground();
    
    // Newsletter form handling
    const newsletterForm = document.querySelector('.xb-item--input_field');
    if (newsletterForm) {
        const submitBtn = newsletterForm.querySelector('.xb-item--btn');
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        if (submitBtn && emailInput) {
            submitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const email = emailInput.value.trim();
                if (email && validateEmail(email)) {
                    // Handle newsletter subscription
                    console.log('Newsletter subscription for:', email);
                    // You can add your actual newsletter subscription logic here
                    
                    // Show success message
                    showNewsletterMessage('Thank you for subscribing!', 'success');
                    emailInput.value = '';
                } else {
                    showNewsletterMessage('Please enter a valid email address.', 'error');
                }
            });
            
            // Handle enter key press in email input
            emailInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    submitBtn.click();
                }
            });
        }
    }
    
    // Smooth scroll for footer links
    const footerLinks = document.querySelectorAll('footer a[href^="#"]');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeFooterBackground() {
    // Handle bg_img class and data-bg-color attribute
    const footerElement = document.querySelector('footer.bg_img');
    if (footerElement) {
        const bgColor = footerElement.getAttribute('data-bg-color');
        if (bgColor) {
            footerElement.style.backgroundColor = bgColor;
        }
        
        // Handle background image if data-background attribute exists
        const bgImage = footerElement.getAttribute('data-background');
        if (bgImage) {
            footerElement.style.backgroundImage = `url(${bgImage})`;
            footerElement.style.backgroundSize = 'cover';
            footerElement.style.backgroundPosition = 'center';
            footerElement.style.backgroundRepeat = 'no-repeat';
        }
    }
    
    // Re-trigger any background initialization from main.js if it exists
    if (typeof window.initBackgrounds === 'function') {
        window.initBackgrounds();
    }
    
    // Alternative: manually trigger background color application
    const bgElements = document.querySelectorAll('[data-bg-color]');
    bgElements.forEach(function(element) {
        const bgColor = element.getAttribute('data-bg-color');
        if (bgColor) {
            element.style.backgroundColor = bgColor;
        }
    });
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNewsletterMessage(message, type) {
    // Create or update message element
    let messageEl = document.querySelector('.newsletter-message');
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.className = 'newsletter-message';
        messageEl.style.cssText = `
            margin-top: 10px;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 14px;
            transition: opacity 0.3s ease;
        `;
        
        const inputField = document.querySelector('.xb-item--input_field');
        if (inputField) {
            inputField.appendChild(messageEl);
        }
    }
    
    messageEl.textContent = message;
    messageEl.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
    messageEl.style.color = 'white';
    messageEl.style.opacity = '1';
    
    // Hide message after 3 seconds
    setTimeout(() => {
        if (messageEl) {
            messageEl.style.opacity = '0';
            setTimeout(() => {
                if (messageEl && messageEl.parentNode) {
                    messageEl.parentNode.removeChild(messageEl);
                }
            }, 300);
        }
    }, 3000);
}