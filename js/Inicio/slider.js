var swiper = new Swiper('.mySwiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        620: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        920: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1240: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    }
});