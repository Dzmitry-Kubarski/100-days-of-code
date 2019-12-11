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

        // ----- responsive slider -----
        responsive: [
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: true,
                    centerMode: false,
                }
            },

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: true,
                    centerMode: false,
                }
            },

        ]

    });


    $('#btnShow').click(function (event) {
        event.preventDefault();
        $('.articles__row').append('<article class="post"><div class="post__inner"><span class="post__subtitle">TRAVEL</span><span class="post__dash">/</span><span class="post__date">March 6, 2019</span><h2 class="post__title">Make Your Adventure Sound REALLY Epic</h2><div class="post__img-inner"><a class="post__img-link" href="#"><img src="assets/img/articles/img-2.jpg" alt=""></a></div><p class="post__text">Do you find yourself reading stories about adventures in outdoor magazines and websites and feeling down about what you did on your summer vacation?</p><button class="btn" type="submit">Read More</button></div> <!-- /post__inner --></article>');
    });

});