$(function () {

    $('.offer__inner, .news__slider-inner').slick({
        infinite: false,
        prevArrow: '<button class="slick-prev slick-btn"></button>',
        nextArrow: '<button class="slick-next slick-btn"></button>',

    });

    $('select').styler();

    // Мобильное меню
    $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
    });


});