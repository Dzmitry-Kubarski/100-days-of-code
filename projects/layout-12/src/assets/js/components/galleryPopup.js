// ---- theHotel-slider ----

var btn_prev = document.querySelector('.gallery-popup__btnControl--prev');
var btn_next = document.querySelector('.gallery-popup__btnControl--next');

var images = document.querySelectorAll('.gallery__img');
var i = 0;


btn_prev.onclick = function () {
    images[i].className = '';
    i = i - 1;

    if (i < 0) {
        i = images.length - 1;
    }

    images[i].className = 'showed';
}

btn_next.onclick = function () {
    images[i].className = '';
    i = i + 1;

    if (i >= images.length) {
        i = 0;
    }

    images[i].className = 'showed';
}


$(".welcome__img-inner .welcome__btn--galleria").click(function () {

    $('.gallery-popup').fadeIn(200);
    $('.video__overlay').fadeIn(200);
});

$(".video__overlay, .gallery-popup .video__close").click(function () {
    $('.video__overlay').fadeOut(100);

    $('.video__wrap .photos').html(" ");
    $('.gallery-popup').fadeOut(200);
});
