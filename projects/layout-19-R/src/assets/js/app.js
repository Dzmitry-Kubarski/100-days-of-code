// ---- Connection libs ----

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js


$(function () {

    // Аккордион
    $('.questions__item-header').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.questions__item-header').not(this).removeClass('in').next().slideUp();
    });

});