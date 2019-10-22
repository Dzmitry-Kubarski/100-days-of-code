$(document).ready(function () {

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