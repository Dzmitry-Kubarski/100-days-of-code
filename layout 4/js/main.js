$(document).ready(function () {

    // ----- Mobail menu button -----
    // $('.header-btn_menu').on('click', function () {
    //     $('.main__mobail_wrap').show();
    //     $(this).hide();
    //     $('.header-btn_close').show();

    // });

    // $('.header-btn_close').on('click', function () {
    //     $('.main__mobail_wrap').hide();
    //     $(this).hide();
    //     $('.header-btn_menu').show();

    // });


    // ----- Слайдер Slick -----

    $('.product-cards').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="product__slider-btn_prev product__slider-btn"><img src="img/btn-prev.svg" alt="arrow"></button>',
        nextArrow: '<button class="product__slider-btn_next product__slider-btn"><img src="img/btn-next.svg" alt="arrow"></button>',


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


    // Слайдер секции videos
    // $('.videos-slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    // });


    // Слайдер секции categories
    $('.categories-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '150px',
        prevArrow: '<button class="categories__slider-btn_prev slider-btn"><img src="img/btn-prev.svg" alt="arrow"></button>',
        nextArrow: '<button class="categories__slider-btn_next slider-btn"><img src="img/btn-next.svg" alt="arrow"></button>',
    });



    // Слайдер секции experiences
    $('.experiences-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="experiences__slider-btn_prev slider-btn"><img src="img/btn-prev.svg" alt="arrow"></button>',
        nextArrow: '<button class="experiences__slider-btn_next slider-btn"><img src="img/btn-next.svg" alt="arrow"></button>',
        // fade: true,
        // asNavFor: '.experiences-dots'
    });


    // $('.experiences-dots').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.experiences-slider',
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true

    // });




});