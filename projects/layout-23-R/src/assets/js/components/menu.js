$('.header__burger-wrap').on('click', function (event) {
    event.preventDefault();
    $('.menu').addClass('active');
    $('.menu-overlay').fadeIn();
});

$('.menu__close').on('click', function (event) {
    event.preventDefault();
    $('.menu').removeClass('active');
    $('.menu-overlay').fadeOut();
});