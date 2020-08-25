// ---- Connection libs ----
// =========================

/* Slider Swiper */
//= ../../../../../node_modules/swiper/js/swiper.min.js

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js


$(function () {

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 30,
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




    // ------------ Tabs questions -------
    $('.questions__btn').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.questions__content-inner').removeClass('active').hide();
        $('.questions__btn').parents().removeClass('active');

        $(this).parents().addClass('active');
        $('#' + id).addClass('active').fadeIn();
        return false;
    });





    // ------------ Slider Slick -------
    $('.models__slides').each(function (index, el) {
        $(this).slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 600,
            arrows: false
        });
        var _this = $(this);

        // $(this).parents('.hits, .newProducts, .news').find('.section-header__prev').on('click', function (event) {
        //     _this.slick('slickPrev');
        // });
        // $(this).parents('.hits, .newProducts, .news').find('.section-header__next').on('click', function (event) {
        //     _this.slick('slickNext');
        // });

        responsive: [

            {
                breakpoint: 1281,
                settings: {
                    prevArrow: false,
                    nextArrow: false,
                    slidesToShow: 3,
                }
            },




        ]
    });
});