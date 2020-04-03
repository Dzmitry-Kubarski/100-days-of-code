// ---- Connection libs ----

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js


$(function () {


    // ------------ Slider Slick -------
    $('.slides').each(function (index, el) {
        $(this).slick({
            //dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 600,
            arrows: false
        });
        var _this = $(this);

        $(this).parents('.hits, .newProducts, .news').find('.section-header__prev').on('click', function (event) {
            _this.slick('slickPrev');
        });
        $(this).parents('.hits, .newProducts, .news').find('.section-header__next').on('click', function (event) {
            _this.slick('slickNext');
        });
    });

});