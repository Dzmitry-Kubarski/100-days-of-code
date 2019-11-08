$(document).ready(function () {

    // ----- Mobail menu button -----
    $('.header-btn_menu').on('click', function () {
        $('.main__mobail_wrap').show();
        $(this).hide();
        $('.header-btn_close').show();

    });

    $('.header-btn_close').on('click', function () {
        $('.main__mobail_wrap').hide();
        $(this).hide();
        $('.header-btn_menu').show();

    });


    // ----- Слайдер Slick -----

    $('.comments__slider').slick({
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="comments__slider-btn_prev comments__slider-btn"><img src="img/arrow-prev.svg" alt="arrow"></button>',
        nextArrow: '<button class="comments__slider-btn_next comments__slider-btn"><img src="img/arrow-next.svg" alt="arrow"></button>',



        // ----- responsive slider -----
        responsive: [

            {
                breakpoint: 1240,
                settings: {
                    prevArrow: false,
                    nextArrow: false,
                    dots: true,

                }
            },

            {
                breakpoint: 836,
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