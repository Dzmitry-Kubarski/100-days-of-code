//= ../../../../../node_modules/slick-carousel/slick/slick.js




$(function () {

    $('#btnOpen').on('click', function () {
        $('#headerList').slideToggle(300, function () {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });


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


    // Slider Slick
    // ============

    // $('.installation__slider').slick({
    //     dots: true,
    //     dotsClass: "my-dots",
    //     arrows: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 800,
    // });


});

