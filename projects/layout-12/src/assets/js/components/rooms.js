// ---- rooms-slider ----

// ===========================================test===========



// var classic_prev = document.querySelector('.classic-prev');
// var classic_next = document.querySelector('.classic-next');

// var classic_images = document.querySelectorAll('.classic__img');
// var i = 0;


// classic_prev.onclick = function () {
//     classic_images[i].classList.toggle("showed");
//     i = i - 1;

//     if (i < 0) {
//         i = classic_images.length - 1;
//     }

//     classic_images[i].classList.toggle("showed");
// }

// classic_next.onclick = function () {
//     classic_images[i].classList.toggle("showed");
//     i = i + 1;

//     if (i >= classic_images.length) {
//         i = 0;
//     }

//     classic_images[i].classList.toggle("showed");
// }


// ===========================================test=============

var classic_prev = document.querySelector('.classic-prev');
var classic_next = document.querySelector('.classic-next');

var classic_images = document.querySelectorAll('.classic__img');
var i = 0;


classic_prev.onclick = function () {
    classic_images[i].classList.toggle("showed");
    i = i - 1;

    if (i < 0) {
        i = classic_images.length - 1;
    }

    classic_images[i].classList.toggle("showed");
}

classic_next.onclick = function () {
    classic_images[i].classList.toggle("showed");
    i = i + 1;

    if (i >= classic_images.length) {
        i = 0;
    }

    classic_images[i].classList.toggle("showed");
}

// -----------------------------------------


var superDouble__img_prev = document.querySelector('.superDouble-prev');
var superDouble__img_next = document.querySelector('.superDouble-next');

var superDouble__img_images = document.querySelectorAll('.superDouble__img');
var i = 0;


superDouble__img_prev.onclick = function () {
    superDouble__img_images[i].classList.toggle("showed");
    i = i - 1;

    if (i < 0) {
        i = superDouble__img_images.length - 1;
    }

    superDouble__img_images[i].classList.toggle("showed");
}

superDouble__img_next.onclick = function () {
    superDouble__img_images[i].classList.toggle("showed");
    i = i + 1;

    if (i >= superDouble__img_images.length) {
        i = 0;
    }

    superDouble__img_images[i].classList.toggle("showed");
}

// -----------------------------------------------------


var superBalcony_prev = document.querySelector('.superBalcony-prev');
var superBalcony_next = document.querySelector('.superBalcony-next');

var superBalcony_images = document.querySelectorAll('.superBalcony__img');
var i = 0;


superBalcony_prev.onclick = function () {
    superBalcony_images[i].classList.toggle("showed");
    i = i - 1;

    if (i < 0) {
        i = superBalcony_images.length - 1;
    }

    superBalcony_images[i].classList.toggle("showed");
}

superBalcony_next.onclick = function () {
    superBalcony_images[i].classList.toggle("showed");
    i = i + 1;

    if (i >= superBalcony_images.length) {
        i = 0;
    }

    superBalcony_images[i].classList.toggle("showed");
}


// -----------------------------------------------------------

var delux_prev = document.querySelector('.delux-prev');
var delux_next = document.querySelector('.delux-next');

var delux_images = document.querySelectorAll('.delux__img');
var i = 0;


delux_prev.onclick = function () {
    delux_images[i].classList.toggle("showed");
    i = i - 1;

    if (i < 0) {
        i = delux_images.length - 1;
    }

    delux_images[i].classList.toggle("showed");
}

delux_next.onclick = function () {
    delux_images[i].classList.toggle("showed");
    i = i + 1;

    if (i >= delux_images.length) {
        i = 0;
    }

    delux_images[i].classList.toggle("showed");
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













