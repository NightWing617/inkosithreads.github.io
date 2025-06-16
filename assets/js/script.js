// assets/js/script.js

// Mobile Menu Toggle
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

openMenu?.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
});

closeMenu?.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    document.body.style.overflow = 'auto';
});

// Testimonial Carousel
const carouselIndicators = document.querySelectorAll('.carousel-indicator');
const carouselItems = document.querySelectorAll('.carousel-item');

carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselIndicators.forEach(ind => ind.classList.remove('active'));
        carouselItems[index].classList.add('active');
        indicator.classList.add('active');
    });
});

let currentTestimonial = 0;
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % carouselItems.length;
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselIndicators.forEach(ind => ind.classList.remove('active'));
    carouselItems[currentTestimonial].classList.add('active');
    carouselIndicators[currentTestimonial].classList.add('active');
}, 5000);

// Load HTML partials dynamically after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[include-html]').forEach(async (el) => {
        const file = el.getAttribute('include-html');
        try {
            const res = await fetch(file);
            if (res.ok) {
                el.innerHTML = await res.text();
            } else {
                el.innerHTML = "<p class='text-red-600'>Section failed to load.</p>";
            }
        } catch (err) {
            console.error('Error loading partial:', file, err);
        }
    });
});
