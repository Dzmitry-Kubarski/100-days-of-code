// ---- Connection libs ----

/* Slick slider */
//= ../../../../../node_modules/slick-carousel/slick/slick.js

/* Slick slider */
//= vendor/jquery.downCount.js


$(function () {

    $(".single_image").fancybox();


    $('.finish__tabs-bnt').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.finish__items').find('.finish__item').removeClass('active-item').hide();
        $('.finish__tabs').find('.finish__tabs-bnt').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-item').fadeIn();
        return false;
    });


    //------- Таймер ---------
    function e() {
        var e = new Date;
        e.setDate(e.getDate() + 3);

        var dd = e.getDate();
        var mm = e.getMonth() + 1;
        var y = e.getFullYear();

        var futureFormattedDate = mm + "/" + dd + "/" + y + ' 12:00:00';

        return futureFormattedDate;
    }

    $('.countdown').downCount({
        date: e(),
        offset: -4
    }, function () {
        alert('WOOT WOOT, done!');
    });


    // ------------ Tabs Variants -------
    $('.variants__dots-link').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.variants__content').removeClass('active').hide();
        $('.variants__dots').find('.variants__dots-link').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active').fadeIn();
        return false;
    });


    // -------- Popup --------
    $('.callback, .popupBtn, .variants__item-btn').click(function () {
        var id = $(this).attr('data-id');
        $('body').addClass('over-hide');
        $('.popup__wrap').addClass('active');
        $('.popup').removeClass('active');
        // $('.' + $(this).data('popup')).addClass('active');
        // $('.popup').data('popup').addClass('active');
        $('#' + id).addClass('active');


    });

    $('.popup__close, .popup__overlay').click(function () {
        $('.popup__wrap').toggleClass('active');
        // $('.fixedHeader').toggleClass('active');
        $('body').removeClass('over-hide');
    });

});