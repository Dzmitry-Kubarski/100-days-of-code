// ---- Connection libs ----  

//= ../../../../../node_modules/slick-carousel/slick/slick.js


$(function () {

    // ---- Components ----  

    // ---- off ----
    //= components/popup.js
    //= components/videoPopup.js


    // ---- on ----   

    //= components/introSlider.js
    //= components/aboutSlider.js
    //= components/ourMasters.js
    //= components/mobailMenu.js
    //= components/slickSlider.js





    $('.mainMenu__link, .footer__scrolTop').click(function () {

        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
        return false;
    });


    // ---- ТопСкрол ----
    $(window).scroll(function () {
        if ($(window).scrollTop() > 900) {
            $('.footer__scrolTop').css('display', 'flex');
        } else {
            $('.footer__scrolTop').css('display', 'none');
        }
    });


});

