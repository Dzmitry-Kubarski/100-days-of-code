// ---- Connection libs ----

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js


$(function () {

    $('.program__show-text').click(function () {
        $(this).toggleClass('active');
        $(this).prev('.program__text--new').toggleClass('active');
    });


    $('.program__accept-btn, .intro__icon, .header__menu-btn').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
        return false;
    });

    // Аккордион
    $('.questions__subtitle').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.questions__subtitle').not(this).removeClass('in').next().slideUp();
    });


    // Fixed menu
    jQuery(window).on("scroll", function () {
        var scrolled = jQuery(this).scrollTop();
        if (scrolled > 10) {
            jQuery('.header').addClass('scrolled');
        }
        if (scrolled <= 10) {
            jQuery('.header').removeClass('scrolled');
        }
    });


    // Форма в программе лектора
    $('.popup__lecturer-btn').on('click', function () {
        $('.popup__form-box').toggleClass('active');
    });

    $('.modal').on('hide.bs.modal', function () {
        $('.popup__form-box').removeClass('active');
    });


    // -------- Popup --------
    $('.program__card-btn, .variants__card-btn').click(function () {
        var id = $(this).attr('data-id');
        $('body').addClass('over-hide');
        $('.popup__wrap').addClass('active');
        $('.popup').removeClass('active');
        $('#' + id).addClass('active');
    });

    $('.popup__close, .popup__overlay').click(function () {
        $('.popup__wrap').toggleClass('active');
        $('body').removeClass('over-hide');
    });


    // Mobail menu
    $('.header__menu-btn').click(function () {
        $(this).toggleClass('open-menu');
        $('.mobail-menu').toggleClass('active');
        $('.header__inner').toggleClass('open-menu');

        $('.header').removeClass('scrolled');
    });

});


