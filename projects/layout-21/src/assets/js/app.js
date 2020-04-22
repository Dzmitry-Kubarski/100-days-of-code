// ---- Connection libs ----
// =========================

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js

/* Slider Swiper */
//= ../../../../../node_modules/swiper/js/swiper.min.js


$(function () {

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 30,
        // grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            900: {
                slidesPerView: 6,
            },
            768: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView: 3,
            },
            375: {
                slidesPerView: 2,
            },
        }
    });



});