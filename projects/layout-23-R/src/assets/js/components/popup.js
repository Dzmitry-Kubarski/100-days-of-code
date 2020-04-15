$('.call, .price__item-btn, .portfolio__hover-btn, .js-details').click(function () {
    var id = $(this).attr('data-id');
    $('html').addClass('over-hide');
    $('.popup__wrap').addClass('active');
    $('.popup').removeClass('active');
    $('#' + id).addClass('active');
});

$('.popup__close, .popup__overlay').click(function () {
    $('.popup__wrap').toggleClass('active');
    $('html').removeClass('over-hide');
});