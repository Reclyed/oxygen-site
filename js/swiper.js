const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
      },
    navigation: {
        nextEl: ".swiper__button-next",
        prevEl: ".swiper__button-prev",
    },
});