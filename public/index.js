// SHREE PAINTING WORKS - Main JavaScript File
// Handles all interactive functionality for the website

// Initialize EmailJS when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined' && emailjs.init) {
        emailjs.init("YOUR_PUBLIC_KEY");
    }

    // Mobile Menu Toggle Functionality
    const menuButton = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuButton && navLinks) {
        menuButton.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on navigation links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
            });
        });
    }

    // Contact Form Submission Handler
    const contactForm = document.getElementById('final-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const name = document.getElementById('uname').value;
            const phone = document.getElementById('uphone').value;
            const msg = document.getElementById('umsg').value;

            btn.innerText = 'Sending Details...';

            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this).then(function () {
                const waLink = `https://wa.me/917057201268?text=नवीन%20चौकशी%20आली%20आहे:%0A*नाव:*%20${encodeURIComponent(name)}%0A*फोन:*%20${encodeURIComponent(phone)}%0A*मेसेज:*%20${encodeURIComponent(msg)}`;
                window.open(waLink, '_blank');
                alert('माहिती पाठवली आहे!');
                document.getElementById('final-form').reset();
                btn.innerText = 'Submit Success';
            }, function () {
                alert('त्रुटी आली, कृपया कॉल करा!');
                btn.innerText = 'Submit Inquiry';
            });
        });
    }

    // Gallery Image Generation (for index.html and gallery.html)
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid && galleryGrid.innerHTML.trim() === '') {
        // Generate 20 work images and 8 videos for gallery
        let galleryHTML = '';

        // Add work images
        for (let i = 1; i <= 20; i++) {
            galleryHTML += `<div class="media-item"><img src="work${i}.jpg" alt="Work ${i}"></div>`;
        }

        // Add videos
        for (let v = 1; v <= 8; v++) {
            galleryHTML += `<div class="media-item"><video src="video${v}.mp4" controls></video></div>`;
        }

        galleryGrid.innerHTML = galleryHTML;
    }
});

// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

function safeQuerySelectorAll(selector) {
    try {
        return document.querySelectorAll(selector);
    } catch (error) {
        console.warn(`Elements not found: ${selector}`);
        return [];
    }
}</content>
<parameter name="filePath">c:\Users\HP\OneDrive\Documents\GitHub\shree-painting-works\public\index.js