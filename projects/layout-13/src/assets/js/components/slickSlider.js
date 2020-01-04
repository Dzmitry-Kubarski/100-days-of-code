// ----- SlickSlider -----

$('.instagram__inner').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 800,
    // infinite: false,
    nextArrow: '<button class="g-btn--circle  slider-btn  slider-btn_next"><svg class="about__btn-icon"><use xlink:href=#btnPrev-svg></use></svg></button>',
    prevArrow: '<button class="g-btn--circle  slider-btn  slider-btn_prev"><svg class="about__btn-icon"><use xlink:href=#btnNext-svg></use></svg></button>',

    // ----- responsive slider -----
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },

        {
            breakpoint: 610,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },

    ]

});