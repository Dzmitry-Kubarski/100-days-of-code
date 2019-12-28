// ---- galleryPopup ----

var galleryPopupPrev = document.querySelector('.gallery-popup__btnControl--prev');
var galleryPopupNext = document.querySelector('.gallery-popup__btnControl--next');
var galleryPopupImages = document.querySelectorAll('.gallery__img');
var galleryPopupCounter = 0;

function galleryPopupSlider() {
    for (var i = 0; i < galleryPopupImages.length; i++) {
        galleryPopupImages[i].classList.remove('showed');
    }
    galleryPopupImages[galleryPopupCounter].classList.add('showed');
}

galleryPopupPrev.onclick = function () {
    if (galleryPopupCounter - 1 == -1) {
        galleryPopupCounter = galleryPopupImages.length - 1;
    } else {
        galleryPopupCounter--;
    }
    galleryPopupSlider();
};

galleryPopupNext.onclick = function () {
    if (galleryPopupCounter + 1 == galleryPopupImages.length) {
        galleryPopupCounter = 0;
    } else {
        galleryPopupCounter++;
    }
    galleryPopupSlider();
};


$(".welcome__img-inner .welcome__btn--galleria").click(function () {

    $('.gallery-popup').fadeIn(200);
    $('.video__overlay').fadeIn(200);
});

$(".video__overlay, .gallery-popup .video__close").click(function () {
    $('.video__overlay').fadeOut(100);

    $('.video__wrap .photos').html(" ");
    $('.gallery-popup').fadeOut(200);
});
