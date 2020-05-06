// ---- Connection libs ----
// =========================

/* Slider Swiper */
//= ../../../../../node_modules/swiper/js/swiper.min.js


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





    var width = screen.width;


    var slider = document.querySelector('.models__inner .swiper-container');

    var mySwiper = new Swiper(slider, {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })



});