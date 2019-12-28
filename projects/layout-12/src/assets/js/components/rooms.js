// ---- Rooms-sliders ----

// ---------------- Classic ---------------------------

var classicPrev = document.querySelector('.classic-prev');
var classicNext = document.querySelector('.classic-next');
var classicImages = document.querySelectorAll('.classic__img');
var classicCounter = 0;

function classicSlider() {
    for (var i = 0; i < classicImages.length; i++) {
        classicImages[i].classList.remove('showed');
    }
    classicImages[classicCounter].classList.add('showed');
}

classicPrev.onclick = function () {
    if (classicCounter - 1 == -1) {
        classicCounter = classicImages.length - 1;
    } else {
        classicCounter--;
    }
    classicSlider();
};

classicNext.onclick = function () {
    if (classicCounter + 1 == classicImages.length) {
        classicCounter = 0;
    } else {
        classicCounter++;
    }
    classicSlider();
};



// ---------------- Superior Double -----------------------------------

var superDoublePrev = document.querySelector('.superDouble-prev');
var superDoubleNext = document.querySelector('.superDouble-next');
var superDoubleImages = document.querySelectorAll('.superDouble__img');
var superDoubleCounter = 0;

function superDoubleSlider() {
    for (var i = 0; i < superDoubleImages.length; i++) {
        superDoubleImages[i].classList.remove('showed');
    }
    superDoubleImages[superDoubleCounter].classList.add('showed');
}

superDoublePrev.onclick = function () {
    if (superDoubleCounter - 1 == -1) {
        superDoubleCounter = superDoubleImages.length - 1;
    } else {
        superDoubleCounter--;
    }
    superDoubleSlider();
};

superDoubleNext.onclick = function () {
    if (superDoubleCounter + 1 == superDoubleImages.length) {
        superDoubleCounter = 0;
    } else {
        superDoubleCounter++;
    }
    superDoubleSlider();
};



// ---------------- SuperBalcony ------------------------------------

var superBalconyPrev = document.querySelector('.superBalcony-prev');
var superBalconyNext = document.querySelector('.superBalcony-next');
var superBalconyImages = document.querySelectorAll('.superBalcony__img');
var superBalconyCounter = 0;

function superBalconySlider() {
    for (var i = 0; i < superBalconyImages.length; i++) {
        superBalconyImages[i].classList.remove('showed');
    }
    superBalconyImages[superBalconyCounter].classList.add('showed');
}

superBalconyPrev.onclick = function () {
    if (superBalconyCounter - 1 == -1) {
        superBalconyCounter = superBalconyImages.length - 1;
    } else {
        superBalconyCounter--;
    }
    superBalconySlider();
};

superBalconyNext.onclick = function () {
    if (superBalconyCounter + 1 == superBalconyImages.length) {
        superBalconyCounter = 0;
    } else {
        superBalconyCounter++;
    }
    superBalconySlider();
};



// --------------Delux--------------------------------------

var deluxPrev = document.querySelector('.delux-prev');
var deluxNext = document.querySelector('.delux-next');
var deluxImages = document.querySelectorAll('.delux__img');
var deluxCounter = 0;

function deluxSlider() {
    for (var i = 0; i < deluxImages.length; i++) {
        deluxImages[i].classList.remove('showed');
    }
    deluxImages[deluxCounter].classList.add('showed');
}

deluxPrev.onclick = function () {
    if (deluxCounter - 1 == -1) {
        deluxCounter = deluxImages.length - 1;
    } else {
        deluxCounter--;
    }
    deluxSlider();
};

deluxNext.onclick = function () {
    if (deluxCounter + 1 == deluxImages.length) {
        deluxCounter = 0;
    } else {
        deluxCounter++;
    }
    deluxSlider();
};



// ---- Rooms tabs ----

$('.rooms__dots-item').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.rooms__items').find('.rooms__item').removeClass('active-item').hide();
    $('.rooms__dots').find('.rooms__dots-item').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-item').fadeIn();
    return false;
});


// ---- Rooms filter ----

$('.rooms__filter-btn').on('click', function (event) {
    var id = $(this).attr('data-name');
    var roomsItem = document.querySelectorAll('.rooms__dots-item');


    for (var i = 0; i < roomsItem.length; i++) {

        roomsItem[i].style.display = 'none';

        if ($(roomsItem[i]).hasClass(id)) {
            roomsItem[i].style.display = 'flex';
        }
    }
});













