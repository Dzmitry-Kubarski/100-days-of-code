$(document).ready(function () {

    //---------Mobail menu button------------------------
    $('.header-btn--menu').on('click', function () {
        $('.main__mobail--wrap').show();
        $(this).hide();
        $('.header-btn--close').show();
        $('.logo__title').hide();
        $('.logo__subtitle').hide();

    });

    $('.header-btn--close').on('click', function () {
        $('.main__mobail--wrap').hide();
        $(this).hide();
        $('.header-btn--menu').show();
        $('.logo__title').show();
        $('.logo__subtitle').show();
    });

    //---------Scroll------------------------

    $('.header__btn, .nav__link--mobail, .nav__link').click(function () {

        let target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
        return false;
    });


});