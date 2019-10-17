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


    $('.friends__slider--wrapper').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="friends-slider__btn--left slider-btn"><img src="img/left-arrow.png" alt="arrow"></button>',
        nextArrow: '<button class="friends-slider__btn--right slider-btn"><img src="img/right-arrow.png" alt="arrow"></button>',


        //--------------responsive:__slider---------------------
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

});