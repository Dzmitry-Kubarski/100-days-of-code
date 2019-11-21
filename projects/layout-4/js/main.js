$(document).ready(function () {

    // ----- Mobail menu button-----
    $('.btn-open').on('click', function () {
        $('.header-menu_mobail').show();
        $(this).hide();
        $('.btn-close').show();

    });

    $('.btn-close').on('click', function () {
        $('.header-menu_mobail').hide();
        $(this).hide();
        $('.btn-open').show();

    });


    // ----- Слайдер Slick -----

    $('.product-cards').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
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
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: true,
                    centerMode: false,

                }
            },


        ]
    });


    // Слайдер секции categories
    $('.categories-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '185px',
        prevArrow: '<button class="categories__slider-btn_prev slider-btn"><img src="img/btn-prev.svg" alt="arrow"></button>',
        nextArrow: '<button class="categories__slider-btn_next slider-btn"><img src="img/btn-next.svg" alt="arrow"></button>',

        responsive: [

            {
                breakpoint: 1870,
                settings: {
                    // prevArrow: false,
                    // nextArrow: false,
                    dots: false,
                    centerPadding: '0',

                }
            },

            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: true,
                    centerMode: false,
                }
            },

            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: true,
                    centerMode: false,
                    variableWidth: true,
                }
            },


        ]
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


    // Слайдер секции videos

    $('.videos-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // dots: true,
        // dotsClass: "my-dots",
        // fade: true,
        // asNavFor: '.videos-dots',
    });


    // $('.videos-dots').slick({
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     dots: true,
    //     // fade: true,
    //     asNavFor: '.videos-slider'
    // });



    // Video Modal

    $('.js-modal-btn').modalVideo();


});