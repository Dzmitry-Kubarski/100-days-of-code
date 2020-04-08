// ---- Connection libs ----

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js


$(function () {

    // intro slider

    $('.intro__slider-items').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [

            {
                breakpoint: 776,
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                }
            },

        ]
        // fade: true
    });


    $('.prev').on('click', function (event) {
        $('.intro__slider-items').slick('slickPrev');
    });
    $('.next').on('click', function (event) {
        $('.intro__slider-items').slick('slickNext');
    });

});