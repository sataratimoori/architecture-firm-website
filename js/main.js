const panoramaSwiper = new Swiper(".panorama-swiper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
});
