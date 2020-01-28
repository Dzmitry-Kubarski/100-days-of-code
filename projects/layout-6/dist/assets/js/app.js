

$(function () {


    $(function () {

        $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');

    });



    // ----- Слайдер Slick -----

    // $('.portfolio__slider').slick({
    //     dots: false,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     prevArrow: '<button class="product__slider-btn_prev product__slider-btn"><img src="img/btn-prev.svg" alt="arrow"></button>',
    //     nextArrow: '<button class="product__slider-btn_next product__slider-btn"><img src="img/btn-next.svg" alt="arrow"></button>',


    //     // ----- responsive slider -----
    //     responsive: [

    //         {
    //             breakpoint: 1240,
    //             settings: {
    //                 prevArrow: false,
    //                 nextArrow: false,
    //                 dots: true,

    //             }
    //         },

    //         {
    //             breakpoint: 567,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 prevArrow: false,
    //                 nextArrow: false,
    //                 dots: true,
    //                 centerMode: false,

    //             }
    //         },
    //     ]
    // });



    // ------------ Dots -------
    $('.portfolio__dots-btn').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('data-id');
        $('.portfolio__slide').removeClass('active').hide();
        $('.portfolio__dots').find('.portfolio__dots-btn').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active').fadeIn();
        return false;
    });



});