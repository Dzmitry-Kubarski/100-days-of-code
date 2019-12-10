//= ../../../../../node_modules/slick-carousel/slick/slick.js


$(function () {

    // $('#headerMenu').on('click', function () {
    //     $('#menuList').slideToggle(300, function () {

    //         if ($(this).css('display') === 'none') {
    //             $(this).removeAttr('style');
    //         }
    //     });
    // });


    // Scroll
    // ======

    // $('[data-scroll]').on('click', function (event) {
    //     event.preventDefault();

    //     var elementID = $(this).data('scroll');
    //     var elementOffset = $(elementID).offset().top;

    //     $('html, body').animate({
    //         scrollTop: elementOffset
    //     });
    // });


    // ----- Cкрол к секции -----

    // $('.menu__link').click(function () {

    //     var target = $(this).attr('href');
    //     $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
    //     return false;
    // });    

    $('.js-introSlider__items').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        // nextArrow: '<button class="slider-btn_next"><img src="assets/img/next.svg" alt="arrow"></button>',
        // prevArrow: '<button class="slider-btn_prev"><img src="assets/img/prev.svg" alt="arrow"></button>',

    });

});