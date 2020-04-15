$('.step-slider__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [

        {
            breakpoint: 776,
            settings: {
                slidesToShow: 2,
                autoplay: false,
            }
        },

        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
            }
        },

    ]

});


$('.prev').on('click', function (event) {
    $('.step-slider__items').slick('slickPrev');
});
$('.next').on('click', function (event) {
    $('.step-slider__items').slick('slickNext');
});