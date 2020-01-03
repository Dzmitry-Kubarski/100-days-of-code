// ------------- AboutSlider ----------------

var aboutPrev = document.querySelector('.about__btn--prev');
var aboutNext = document.querySelector('.about__btn--next');
var aboutImages = document.querySelectorAll('.about__img');
var aboutText = document.querySelectorAll('.about__text');
var aboutCounter = 0;

function aboutSlider() {

    for (var i = 0; i < aboutImages.length; i++) {
        aboutImages[i].classList.remove('js-show');
    }
    aboutImages[aboutCounter].classList.add('js-show');

    var imagesAtttr = aboutImages[aboutCounter].dataset.name;

    for (var j = 0; j < aboutText.length; j++) {

        aboutText[j].classList.remove('js-show');

        if ($(aboutText[j]).hasClass(imagesAtttr)) {
            aboutText[j].classList.add('js-show');
        }
    }
}

aboutPrev.onclick = function () {
    if (aboutCounter - 1 == -1) {
        aboutCounter = aboutImages.length - 1;
    } else {
        aboutCounter--;
    }
    aboutSlider();
};

aboutNext.onclick = function () {

    if (aboutCounter + 1 == aboutImages.length) {
        aboutCounter = 0;
    } else {
        aboutCounter++;
    }
    aboutSlider();
};