// ------------- About ----------------

// $('.intro__btn').on('click', function (event) {
//     var id = $(this).attr('data-id');

//     $('.intro__sliders').find('.intro__slide').removeClass('js-show').hide();

//     $('.intro__buttons').find('.intro__btn').removeClass('js-active');
//     $(this).addClass('js-active');

//     $('#' + id).addClass('js-show').fadeIn();
//     return false;
// });


// ------------------------------рабочий вариант-------------------

// var aboutPrev = document.querySelector('.about__btn--prev');
// var aboutNext = document.querySelector('.about__btn--next');
// var aboutImages = document.querySelectorAll('.about__img');
// var aboutCounter = 0;

// function aboutSlider() {
//     for (var i = 0; i < aboutImages.length; i++) {
//         aboutImages[i].classList.remove('js-show');
//     }
//     aboutImages[aboutCounter].classList.add('js-show');
// }

// aboutPrev.onclick = function () {

//     // $('.about__left-box').find('.about__text').removeClass('js-show').hide();


//     if (aboutCounter - 1 == -1) {
//         aboutCounter = aboutImages.length - 1;
//     } else {
//         aboutCounter--;
//     }
//     aboutSlider();
// };

// aboutNext.onclick = function () {
//     if (aboutCounter + 1 == aboutImages.length) {
//         aboutCounter = 0;
//     } else {
//         aboutCounter++;
//     }
//     aboutSlider();
// };



// ================тесты=====================================================


// $('.rooms__filter-btn').on('click', function (event) {
//     var id = $(this).attr('data-name');

//     $('.about__left-box').find('.about__text').removeClass('js-show').hide();



//     var aboutText = document.querySelectorAll('.about__text');


//     for (var i = 0; i < aboutText.length; i++) {

//         aboutText[i].style.display = 'none';

//         if ($(aboutText[i]).hasClass(id)) {
//             aboutText[i].style.display = 'block';
//         }
//     }
// });





var aboutPrev = document.querySelector('.about__btn--prev');
var aboutNext = document.querySelector('.about__btn--next');
var aboutImages = document.querySelectorAll('.about__img');
var aboutText = document.querySelectorAll('.about__text');
var aboutCounter = 0;

var a = $('.about__left-box').find('.about__text');


// console.log(a);


function aboutSlider() {
    for (var i = 0; i < aboutImages.length; i++) {

        aboutImages[i].classList.remove('js-show');
        // var idImg = $(aboutImages[i]).attr('data-name');

        // $('.about__left-box').find('.about__text').removeClass('js-show');


        // if ($(a[i]).hasClass(idImg)) {
        //     a[i].classList.add('js-show');
        // }

        for (var j = 0; j < aboutText.length; j++) {
            aboutText[i].classList.remove('js-show');

            if ($(a[i]).hasClass('img-2')) {
                a[i].classList.add('js-show');
            }
        }

    }
    aboutImages[aboutCounter].classList.add('js-show');

}

aboutPrev.onclick = function () {

    // $('.about__left-box').find('.about__text').removeClass('js-show').hide();

    // if ($(aboutText[i]).hasClass(idImg)) {
    //     aboutText[i].style.display = 'block';
    // }



    if (aboutCounter - 1 == -1) {
        aboutCounter = aboutImages.length - 1;
    } else {
        aboutCounter--;
    }
    aboutSlider();
};

aboutNext.onclick = function () {
    // $('.about__left-box').find('.about__text').removeClass('js-show').hide();




    if (aboutCounter + 1 == aboutImages.length) {
        aboutCounter = 0;
    } else {
        aboutCounter++;
    }
    aboutSlider();
};