// ---- Connection libs ----

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js


$(function () {


    function mainHeight() {
        $(".intro__slider-item").each(function (index, el) {
            $(this).css({
                "height": $(".intro").outerHeight()
            });
        });
    }

    mainHeight();
    $(window).on('load resize', function () {
        mainHeight();
    });

    $('.intro__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: "slick-dots intro__dots",
        fade: false,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 6000,
        asNavFor: '.intro__content-text'
    });

    $('.intro__content-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 1200,
        asNavFor: '.intro__slider'
    });





});