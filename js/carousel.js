document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    let isAnimating = false;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let autoSlideInterval;

    // Initialize the carousel
    function initCarousel() {
        // Show the first slide initially
        
        slides[0].classList.add('active');
        
        // Add touch support
        const container = document.querySelector('.carousel-container');
        let touchStartX = 0;
        let touchEndX = 0;

        container.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            pauseAutoSlide();
        }, { passive: true });

        container.addEventListener('touchmove', (e) => {
            touchEndX = e.touches[0].clientX;
        }, { passive: true });

        container.addEventListener('touchend', () => {
            const difference = touchStartX - touchEndX;
            if (Math.abs(difference) > 50) { // Minimum swipe distance
                if (difference > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
            startAutoSlide();
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });

        // Start auto-sliding
        startAutoSlide();
    }

    // Function to show a specific slide with animation
    function showSlide(n) {
        if (isAnimating) return;
        isAnimating = true;

        const currentActive = document.querySelector('.carousel-slide.active');
        const nextSlide = slides[(n + totalSlides) % totalSlides];

        // Remove active class from current slide
        currentActive.classList.remove('active');
        
        // Add active class to next slide
        nextSlide.classList.add('active');

        // Reset animation flag after transition
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }

    // Function to show next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
        currentSlide = (currentSlide + 1) % totalSlides;
    }

    // Function to show previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }

    // Function to start auto-sliding
    function startAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    // Function to pause auto-sliding
    function pauseAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
    }

    // Add click event listeners to buttons
    document.querySelector('.next').addEventListener('click', () => {
        nextSlide();
        pauseAutoSlide();
        startAutoSlide();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        prevSlide();
        pauseAutoSlide();
        startAutoSlide();
    });

    // Initialize the carousel
    initCarousel();
}); 