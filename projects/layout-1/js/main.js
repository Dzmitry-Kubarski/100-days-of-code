$(document).ready(function () {

    // ----- Mobail menu button -----
    $('.header-btn_menu').on('click', function () {
        $('.main__mobail_wrap').show();
        $(this).hide();
        $('.header-btn_close').show();
        $('.logo__title').hide();
        $('.logo__subtitle').hide();

    });

    $('.header-btn_close').on('click', function () {
        $('.main__mobail_wrap').hide();
        $(this).hide();
        $('.header-btn_menu').show();
        $('.logo__title').show();
        $('.logo__subtitle').show();
    });


    // ----- скрол к секции -----

    $('.header__btn').click(function () {

        let target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
        return false;
    });


    // ----- Слайдер Slick -----

    $('.friends__slider_wrapper').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="friends-slider__btn--left slider-btn"><img src="img/left-arrow.png" alt="arrow"></button>',
        nextArrow: '<button class="friends-slider__btn--right slider-btn"><img src="img/right-arrow.png" alt="arrow"></button>',


        // ----- responsive slider -----
        responsive: [
            {
                breakpoint: 811,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 626,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: true,

                }
            },
        ]
    });


    // ----- модальное окно -----

    $('.item__link').on('click', function () {
        $('.modal').show();
    });

    $('.modal__btn-close').on('click', function () {
        $('.modal').hide();
    });

});