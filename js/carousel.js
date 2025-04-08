document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Show the first slide initially
    slides[0].classList.add('active');

    // Function to show a specific slide
    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    // Function to show next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Function to show previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Add click event listeners to buttons
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Auto advance slides every 5 seconds
    setInterval(nextSlide, 5000);
}); 