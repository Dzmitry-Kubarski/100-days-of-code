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


    // ----- скрол к секции-----
    $('.menu a').click(function () {

        let target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
        return false;
    });


});