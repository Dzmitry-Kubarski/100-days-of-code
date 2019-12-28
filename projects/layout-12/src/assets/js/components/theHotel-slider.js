// ---- theHotel-sliders ----

// ------------Wellness-----------------------------------

var wellnessPrev = document.querySelector('.wellness-prev');
var wellnessNext = document.querySelector('.wellness-next');
var wellnessImages = document.querySelectorAll('.wellness__img');
var wellnesCounter = 0;

function wellnessSlider() {
    for (var i = 0; i < wellnessImages.length; i++) {
        wellnessImages[i].classList.remove('showed');
    }
    wellnessImages[wellnesCounter].classList.add('showed');
}

wellnessPrev.onclick = function () {
    if (wellnesCounter - 1 == -1) {
        wellnesCounter = wellnessImages.length - 1;
    } else {
        wellnesCounter--;
    }
    wellnessSlider();
};

wellnessNext.onclick = function () {
    if (wellnesCounter + 1 == wellnessImages.length) {
        wellnesCounter = 0;
    } else {
        wellnesCounter++;
    }
    wellnessSlider();
};


// ------------Restaurants-----------------------------------

var restaurantsPrev = document.querySelector('.restaurants-prev');
var restaurantsNext = document.querySelector('.restaurants-next');
var restaurantsImages = document.querySelectorAll('.restaurants__img');
var restaurantsCounter = 0;

function restaurantsSlider() {
    for (var i = 0; i < restaurantsImages.length; i++) {
        restaurantsImages[i].classList.remove('showed');
    }

    restaurantsImages[restaurantsCounter].classList.add('showed');
}

restaurantsPrev.onclick = function () {
    if (restaurantsCounter - 1 == -1) {
        restaurantsCounter = restaurantsImages.length - 1;
    } else {
        restaurantsCounter--;
    }
    restaurantsSlider();
};

restaurantsNext.onclick = function () {
    if (restaurantsCounter + 1 == restaurantsImages.length) {
        restaurantsCounter = 0;
    } else {
        restaurantsCounter++;
    }
    restaurantsSlider();
};


// -------------Special------------------------------------

var specialPrev = document.querySelector('.special-prev');
var specialNext = document.querySelector('.special-next');
var specialImages = document.querySelectorAll('.special__img');
var specialCounter = 0;

function specialSlider() {
    for (var i = 0; i < specialImages.length; i++) {
        specialImages[i].classList.remove('showed');
    }

    specialImages[specialCounter].classList.add('showed');
}

specialPrev.onclick = function () {
    if (specialCounter - 1 == -1) {
        specialCounter = specialImages.length - 1;
    } else {
        specialCounter--;
    }
    specialSlider();
};

specialNext.onclick = function () {
    if (specialCounter + 1 == specialImages.length) {
        specialCounter = 0;
    } else {
        specialCounter++;
    }
    specialSlider();
};