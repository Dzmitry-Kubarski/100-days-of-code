var portfolio = $('#portfolio');

portfolio.slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 800,
});

$('#arrow-prev').on('click', function (event) {
    event.preventDefault();
    portfolio.slick('slickPrev');
});

$('#arrow-next').on('click', function (event) {
    event.preventDefault();
    portfolio.slick('slickNext');
});
