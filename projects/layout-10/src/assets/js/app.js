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



    // Section - Symptoms, tabs
    $('.symptoms__item, .symptoms__item-next').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.symptoms__inner').find('.symptoms__tab').removeClass('active-tab').hide();
        $('.symptoms__items').find('.symptoms__item, .symptoms__item-next').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });


    // Section - reviews, tabs
    $('.reviews__tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.reviews').find('.reviews__box').removeClass('active-box').hide();
        $('.reviews').find('.reviews__tab').removeClass('reviews__tab--active');
        $(this).addClass('reviews__tab--active');
        $('#' + id).addClass('active-box').fadeIn();
        return false;
    });

});

