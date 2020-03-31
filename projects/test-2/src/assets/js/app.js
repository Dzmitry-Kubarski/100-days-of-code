// ---- Connection libs ----

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js


$(function () {

    // ------------ Slider Slick -------
    $('.examples__slider-list').each(function (index, el) {
        $(this).slick({
            //dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 600,
            arrows: false
        });
        var _this = $(this);
        var len = $(this).slick('getSlick').slideCount;
        var numAll = len;
        $(this).parents('.examples__slider').find('.examples__number-all').text(numAll);

        var labelSlider = 1;

        $(this).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var number = nextSlide + 1;

            $(this).parents('.examples__slider').find('.examples__number-current').text(number);
            labelSlider = nextSlide + 1;
        });

        $(this).parents('.examples__slider').find('.examples__btn--prev').on('click', function (event) {
            _this.slick('slickPrev');
        });
        $(this).parents('.examples__slider').find('.examples__btn--next').on('click', function (event) {
            _this.slick('slickNext');
        });
    });


    // ------------ Tabs -------
    $('.examples__tab').on('click', function (event) {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            $('.examples__slider').hide().eq($(this).index()).fadeIn();
            $('.examples__tab').removeClass('active');
            $(this).addClass('active');
            $('.examples__slider-list').each(function (index, el) {
                $(this).slick('setPosition');
            });
        }
    });

});