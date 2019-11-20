//= ../../../../../node_modules/slick-carousel/slick/slick.js
//= components/jquery.parallax-0.2.js



$(function () {

    $('#headerMenu').on('click', function () {
        $('#menuList').slideToggle(300, function () {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });


    // Scroll
    // ======

    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        var elementID = $(this).data('scroll');
        var elementOffset = $(elementID).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset
        });
    });


    // ----- Cкрол к секции -----

    $('.menu__link').click(function () {

        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
        return false;
    });


    // Slider Slick
    // ============

    $('.installation__slider').slick({
        dots: true,
        dotsClass: "my-dots",
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
    });


    // Parallax Move
    // =============

    // if ($(window).width() > 960) {
    //     $('body').parallax({
    //         'elements': [
    //             {
    //                 'selector': '.js-move',
    //                 'properties': {
    //                     'x': {
    //                         'left': {
    //                             'initial': 475,
    //                             'multiplier': 0.02,
    //                             'unit': 'px',
    //                             'invert': false
    //                         }
    //                     },
    //                     'y': {
    //                         'top': {
    //                             'initial': 425,
    //                             'multiplier': 0.03,
    //                             'unit': 'px',
    //                             'invert': false
    //                         }
    //                     }
    //                 }
    //             }
    //         ]
    //     });
    // } else {
    //     // change functionality for larger screens
    // }

    // Parallax Move
    // =============

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
    });

    // $(function () {
    //     $(document).on('mousemove', function (e) {
    //         $('.js-move').css({
    //             left: e.pageX / 10 + 100,
    //             top: e.pageY / 10 + 100
    //         });

    //     });
    // });

});

