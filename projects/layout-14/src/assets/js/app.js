// ---- Connection libs ----

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js

/* Nouislider */
//= ../../../../../node_modules/Nouislider/distribute/nouislider.js



$(function () {

    const priceSlider = document.getElementById('r-slider');
    const inputLeft = document.querySelector('.price-slider__rangeLeft');
    const inputRight = document.querySelector('.price-slider__rangeRight');

    noUiSlider.create(priceSlider, {
        start: [10, 2000],
        tooltips: true,
        connect: true,
        padding: 0,
        range: {
            'min': 10,
            'max': 2000
        },
        format: {
            to: function (value) {
                return parseInt(value);
            },
            from: function (value) {
                return parseInt(value);
            }
        }
    });

    priceSlider.noUiSlider.on('change', (values, handle) => {
        inputLeft.innerHTML = values[0] + ' -  ';
        inputRight.innerHTML = values[1];
    });




    var sidebarMenuOpen = document.querySelector('.sidebar__menu-btn');
    var sidebarList = document.querySelector('.sidebar__menu-list');
    var itemsDropdown = document.querySelectorAll('.sidebar__item-link--dropdown');
    var dropdownList = document.querySelector('.sidebar__dropdown-list');


    sidebarMenuOpen.onclick = function (event) {
        event.preventDefault();
        sidebarList.classList.toggle("open");
    }

    $('.sidebar__item-link--dropdown').click(function () {
        $(this).toggleClass('open');
        $(this).next('.sidebar__dropdown-list').toggleClass('open');
    });

});