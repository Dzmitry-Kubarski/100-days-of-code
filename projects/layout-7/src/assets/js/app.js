//= ../../../../../node_modules/slick-carousel/slick/slick.js


$(function () {

    $('#headerMenu').on('click', function () {
        $('#menuList').slideToggle(300, function () {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }

        });


    });


    // Scroll

    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset
        });
    });


    // Slider Slick

    $('.installation__slider').slick({
        dots: true,
        dotsClass: "my-dots",
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,

    });

});

