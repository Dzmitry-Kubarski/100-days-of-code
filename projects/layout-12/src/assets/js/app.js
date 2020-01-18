// ---- Connection libs ----  

//= ../../../../../node_modules/slick-carousel/slick/slick.js
//= vendor/datepicker.js


$(function () {

    // ---- Components ----  

    // ---- off ----
    //= components/slickSlider.js

    // ---- on ----
    //= components/btnSearch.js
    //= components/mobailMenu.js
    //= components/popup.js
    //= components/bookingCheck.js
    //= components/btnLang.js
    //= components/videoPopup.js
    //= components/galleryPopup.js
    //= components/theHotel-slider.js
    //= components/rooms.js




    $('.header__btn').click(function () {

        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
        return false;
    });

});

