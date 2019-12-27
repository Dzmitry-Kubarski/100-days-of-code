// ---- theHotel-slider ----

var rooms_prev = document.querySelector('.rooms__btnControl--prev');
var rooms_next = document.querySelector('.rooms__btnControl--next');

var rooms_images = document.querySelectorAll('.rooms__img-inner .classic__img');
var i = 0;


rooms_prev.onclick = function () {
    rooms_images[i].className = '';
    i = i - 1;

    if (i < 0) {
        i = rooms_images.length - 1;
    }

    rooms_images[i].className = 'showed';
}

rooms_next.onclick = function () {
    rooms_images[i].className = '';
    i = i + 1;

    if (i >= rooms_images.length) {
        i = 0;
    }

    rooms_images[i].className = 'showed';
}

// -----------------------------------------


var superDouble__img_prev = document.querySelector('.superDouble-prev');
var superDouble__img_next = document.querySelector('.superDouble-next');

var superDouble__img_images = document.querySelectorAll('.rooms__img-inner .superDouble__img');
var i = 0;


superDouble__img_prev.onclick = function () {
    superDouble__img_images[i].className = '';
    i = i - 1;

    if (i < 0) {
        i = superDouble__img_images.length - 1;
    }

    superDouble__img_images[i].className = 'showed';
}

superDouble__img_next.onclick = function () {
    superDouble__img_images[i].className = '';
    i = i + 1;

    if (i >= superDouble__img_images.length) {
        i = 0;
    }

    superDouble__img_images[i].className = 'showed';
}

// -----------------------------------------------------


var superBalcony_prev = document.querySelector('.superBalcony-prev');
var superBalcony_next = document.querySelector('.superBalcony-next');

var superBalcony_images = document.querySelectorAll('.rooms__img-inner .superBalcony__img');
var i = 0;


superBalcony_prev.onclick = function () {
    superBalcony_images[i].className = '';
    i = i - 1;

    if (i < 0) {
        i = superBalcony_images.length - 1;
    }

    superBalcony_images[i].className = 'showed';
}

superBalcony_next.onclick = function () {
    superBalcony_images[i].className = '';
    i = i + 1;

    if (i >= superBalcony_images.length) {
        i = 0;
    }

    superBalcony_images[i].className = 'showed';
}


// -----------------------------------------------------------

var delux_prev = document.querySelector('.delux-prev');
var delux_next = document.querySelector('.delux-next');

var delux_images = document.querySelectorAll('.rooms__img-inner .delux__img');
var i = 0;


delux_prev.onclick = function () {
    delux_images[i].className = '';
    i = i - 1;

    if (i < 0) {
        i = delux_images.length - 1;
    }

    delux_images[i].className = 'showed';
}

delux_next.onclick = function () {
    delux_images[i].className = '';
    i = i + 1;

    if (i >= delux_images.length) {
        i = 0;
    }

    delux_images[i].className = 'showed';
}


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













