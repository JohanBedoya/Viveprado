let currentIndex = 0;

function scrollSlider(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth;

    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}