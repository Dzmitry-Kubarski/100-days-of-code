// ------------- ourMasters ----------------

var ourMastersPrev = document.querySelector('.ourMasters__btn--prev');
var ourMastersNext = document.querySelector('.ourMasters__btn--next');
var ourMastersImages = document.querySelectorAll('.ourMasters__img');
var ourMastersText = document.querySelectorAll('.ourMasters__right-box');
var ourMastersCounter = 0;

function ourMastersSlider() {

    for (var i = 0; i < ourMastersImages.length; i++) {
        ourMastersImages[i].classList.remove('js-show');
    }
    ourMastersImages[ourMastersCounter].classList.add('js-show');

    var ourMastersimagesAtttr = ourMastersImages[ourMastersCounter].dataset.name;

    for (var j = 0; j < aboutText.length; j++) {

        ourMastersText[j].classList.remove('js-show');

        if ($(ourMastersText[j]).hasClass(ourMastersimagesAtttr)) {
            ourMastersText[j].classList.add('js-show');
        }
    }
}

ourMastersPrev.onclick = function () {
    if (ourMastersCounter - 1 == -1) {
        ourMastersCounter = ourMastersImages.length - 1;
    } else {
        ourMastersCounter--;
    }
    ourMastersSlider();
};

ourMastersNext.onclick = function () {

    if (ourMastersCounter + 1 == ourMastersImages.length) {
        ourMastersCounter = 0;
    } else {
        ourMastersCounter++;
    }
    ourMastersSlider();
};