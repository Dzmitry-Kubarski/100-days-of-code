
// ---- Connection libs ----
// =========================


/* Slider Swiper */
//= ../../../../../node_modules/swiper/js/swiper.min.js


// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 6,
//     spaceBetween: 30,
//     // grabCursor: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     breakpoints: {
//         900: {
//             slidesPerView: 6,
//         },
//         768: {
//             slidesPerView: 4,
//         },
//         576: {
//             slidesPerView: 3,
//         },
//         375: {
//             slidesPerView: 2,
//         },
//     }
// });


var width = screen.width;
var items = document.querySelectorAll('.swiper-slide');
var wrap = document.querySelector('.swiper-container');


if (width > 1300) {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        // spaceBetween: 30,
        slidesPerView: 1,
        // mousewheelControl: true,
        // freeModeSticky: true,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    // for (var i = 0; i < items.length; i++) {
    //     items[i].style.background = 'orange';
    //     items[i].style.minHeight = '100vh';
    //     items[i].style.maxHeight = '100vh';
    // }

    // wrap.style.minHeight = '100vh';
    // wrap.style.maxHeight = '100vh';
}

