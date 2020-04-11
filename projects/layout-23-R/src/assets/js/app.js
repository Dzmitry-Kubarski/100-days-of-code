// ---- Connection libs ----

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js

//= libs/rangeSlider/ion.rangeSlider.min.js

//= components/quiz.js

//= libs/twtw/jquery.event.move.js
//= libs/twtw/jquery.twentytwenty.js



$(function () {

    // intro slider

    $('.intro__slider-items').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [

            {
                breakpoint: 776,
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                }
            },

        ]

    });

    $('.prev').on('click', function (event) {
        $('.intro__slider-items').slick('slickPrev');
    });
    $('.next').on('click', function (event) {
        $('.intro__slider-items').slick('slickNext');
    });




    // range-slider

    $(".js-range-slider").ionRangeSlider({
        min: 1,
        max: 100,
        from: 31,
        onStart: function (data) {
            $('#qw3inp').val($(".js-range-slider").prop("value"));
        },
    });

    var my_range = $(".js-range-slider");

    my_range.on("change input", function () {
        var $inp = $(this);
        var from2 = $inp.data("from");
        $('#qw3inp').val(from2);

    });

    var my_range_instance = my_range.data("ionRangeSlider");
    $('#qw3inp').on('change input', function () {
        var _val = $(this).val();
        my_range_instance.update({
            from: _val,
        });
    });




    // example

    var offsetTop2 = $('#example').offset().top - $(window).height() - 110;
    var lbl = false;
    $(window).scroll(function (event) {
        offsetTop2 = $('#example').offset().top - $(window).height() - 110;
        if ($(document).scrollTop() > offsetTop2) {

            if (!lbl) {
                $(".twentytwenty-container").twentytwenty({
                    default_offset_pct: 0.5,
                    orientation: 'horizontal',
                    move_slider_on_hover: true,
                });
                lbl = true;
            }
        }
    });




    // step-slider

    $('.step-slider__items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 5000,
        responsive: [

            {
                breakpoint: 776,
                settings: {
                    slidesToShow: 2,
                    autoplay: false,
                }
            },

            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]

    });


    $('.prev').on('click', function (event) {
        $('.step-slider__items').slick('slickPrev');
    });
    $('.next').on('click', function (event) {
        $('.step-slider__items').slick('slickNext');
    });





    // show consultation seo text

    $('.consultation__seo-btn').on('click', function () {
        $('.consultation__seo-before').toggleClass('active');
    });

});