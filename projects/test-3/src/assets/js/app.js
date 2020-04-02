// ---- Connection libs ----

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js


$(function () {

    $('.slides').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        // adaptiveHeight: true,
        // nextArrow: '<button class="reviews__slider-btn  reviews__slider-btn--prev"><svg><use xlink:href="#svg-prev"></use></svg></button>',
        // prevArrow: '<button class="reviews__slider-btn  reviews__slider-btn--next"><svg><use xlink:href="#svg-next"></use></svg></button>',


        // ----- responsive slider -----
        responsive: [
            {
                breakpoint: 646,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // dots: true,
                    // arrows: false,
                }
            },
        ]
    });

});