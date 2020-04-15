// ==========================
// ---- Connection libs ----
// ==========================

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js


/* rangeSlider */
//= libs/rangeSlider/ion.rangeSlider.min.js


/* twentytwenty */
//= libs/twtw/jquery.event.move.js
//= libs/twtw/jquery.twentytwenty.js


/* fancybox */
//= libs/fancybox/jquery.fancybox.min.js


/* fancySelect */
//= libs/fancySelect/fancySelect.js


$(function () {

    // ================================
    // ---- Connection components ----
    // ===============================


    /* quiz */
    //= components/quiz.js


    /* intro slider */
    //= components/intro-slider.js


    /* range-slider */
    //= components/range-slider.js


    /* example */
    //= components/example.js


    /* step-slider */
    //= components/step-slider.js


    /* show consultation seo text */
    //= components/consultation.js


    /* contacts-slider */
    //= components/contacts-slider.js


    /* button to-top */
    //= components/to-top.js


    /* Popup */
    //= components/popup.js


    /* menu */
    //= components/menu.js


    /* btn-calcs */
    //= components/btn-calcs.js


    /* video-play */
    //= components/video-play.js


    /* fancy-select */
    $('.fancyselect').fancySelect();



    // portfolio scroll

    $('.services__menu-link').on('click', function (event) {
        event.preventDefault();
        var id2 = $('#portfolio').offset().top;
        $('body,html').animate({ scrollTop: id2 }, 500);
    });



    // price scroll

    $('.services__menu-link').on('click', function (event) {
        event.preventDefault();
        var id2 = $('#price').offset().top;
        $('body,html').animate({ scrollTop: id2 }, 500);
    });



    // more guarantees 

    $('.js-more').on('click', function (event) {
        event.preventDefault();
        var id2 = $('#guarantees').offset().top;
        $('body,html').animate({ scrollTop: id2 }, 500);
    });





    // menu scroll

    $('.menu a').click(function () {

        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
        return false;
    });

});