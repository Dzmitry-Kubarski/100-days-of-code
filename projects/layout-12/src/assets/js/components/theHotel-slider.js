// ---- theHotel-slider ----

var theHotel_prev = document.querySelector('.theHotel__btnControl--prev');
var theHotel_next = document.querySelector('.theHotel__btnControl--next');

var theHotel_images = document.querySelectorAll('.wellness__img');
var i = 0;


theHotel_prev.onclick = function () {
    theHotel_images[i].className = '';
    i = i - 1;

    if (i < 0) {
        i = theHotel_images.length - 1;
    }

    theHotel_images[i].className = 'showed';
}

theHotel_next.onclick = function () {
    theHotel_images[i].className = '';
    i = i + 1;

    if (i >= theHotel_images.length) {
        i = 0;
    }

    theHotel_images[i].className = 'showed';
}


// ------------Restaurants-----------------------------------

var restaurants_prev = document.querySelector('.restaurants-prev');
var restaurants_next = document.querySelector('.restaurants-next');

var restaurants_images = document.querySelectorAll('.theHotel__img-inner .restaurants__img');
var i = 0;


restaurants_prev.onclick = function () {
    restaurants_images[i].className = '';
    i = i - 1;

    if (i < 0) {
        i = restaurants_images.length - 1;
    }

    restaurants_images[i].className = 'showed';
}

restaurants_next.onclick = function () {
    restaurants_images[i].className = '';
    i = i + 1;

    if (i >= restaurants_images.length) {
        i = 0;
    }

    restaurants_images[i].className = 'showed';
}

// -------------Special------------------------------------


var special_prev = document.querySelector('.special-prev');
var special_next = document.querySelector('.special-next');

var special_images = document.querySelectorAll('.theHotel__img-inner .special__img');
var i = 0;


special_prev.onclick = function () {
    special_images[i].className = '';
    i = i - 1;

    if (i < 0) {
        i = special_images.length - 1;
    }

    special_images[i].className = 'showed';
}

special_next.onclick = function () {
    special_images[i].className = '';
    i = i + 1;

    if (i >= special_images.length) {
        i = 0;
    }

    special_images[i].className = 'showed';
}

