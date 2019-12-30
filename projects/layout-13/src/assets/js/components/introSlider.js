// ---- IntroSlider ----

$('.intro__btn').on('click', function (event) {
    var id = $(this).attr('data-id');

    $('.intro__sliders').find('.intro__slide').removeClass('js-show').hide();

    $('.intro__buttons').find('.intro__btn').removeClass('js-active');
    $(this).addClass('js-active');

    $('#' + id).addClass('js-show').fadeIn();
    return false;
});