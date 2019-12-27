// ---- Popup ----

$('[data-popup]').click(function () {
    $('body').addClass('over-hide');
    $('.popup__wrap').addClass('active');
    $('.popup').removeClass('active');
    $('.' + $(this).data('popup')).addClass('active');

});

$('.popupBtn, .popup__close, .popup__overlay').click(function () {
    $('.popup__wrap').toggleClass('active');
    $('.fixedHeader').toggleClass('active');
    $('body').removeClass('over-hide');
    // $('[data-wrap-form]').removeClass('hidden');
    // $('[data-wrap-sent]').addClass('hidden');
});