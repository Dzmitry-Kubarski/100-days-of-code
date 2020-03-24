// ---- Connection libs ----

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js


$(function () {

    // Аккордион
    $('.questions__item-header').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.questions__item-header').not(this).removeClass('in').next().slideUp();
    });



    $('.reviews__sliders').slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 800,
        adaptiveHeight: true,
        nextArrow: '<button class="reviews__slider-btn  reviews__slider-btn--prev"><svg><use xlink:href="#svg-prev"></use></svg></button>',
        prevArrow: '<button class="reviews__slider-btn  reviews__slider-btn--next"><svg><use xlink:href="#svg-next"></use></svg></button>',


        // ----- responsive slider -----
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
        ]
    });

});