//= ../../../../../node_modules/slick-carousel/slick/slick.js
//= vendor/datepicker.js


$(function () {

    //= components/btnLang.js


    // $('.js-introSlider__items').slick({
    //     dots: true,
    //     arrows: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 800,
    //     // nextArrow: '<button class="slider-btn_next"><img src="assets/img/next.svg" alt="arrow"></button>',
    //     // prevArrow: '<button class="slider-btn_prev"><img src="assets/img/prev.svg" alt="arrow"></button>',

    //     // ----- responsive slider -----
    //     responsive: [
    //         {
    //             breakpoint: 891,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 prevArrow: false,
    //                 nextArrow: false,
    //                 dots: true,
    //                 centerMode: false,
    //             }
    //         },

    //         {
    //             breakpoint: 751,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 prevArrow: false,
    //                 nextArrow: false,
    //                 dots: true,
    //                 centerMode: false,
    //             }
    //         },

    //     ]

    // });


    // // Добавление нового поста
    // $('#btnShow').click(function (event) {
    //     event.preventDefault();
    //     $('.articles__row').append('<article class="post"><div class="post__inner"><span class="post__subtitle">TRAVEL</span><span class="post__dash">/</span><span class="post__date">March 6, 2019</span><h2 class="post__title">Make Your Adventure Sound REALLY Epic</h2><div class="post__img-inner"><a class="post__img-link" href="#"><img src="assets/img/articles/img-2.jpg" alt=""></a></div><p class="post__text">Do you find yourself reading stories about adventures in outdoor magazines and websites and feeling down about what you did on your summer vacation?</p><button class="btn" type="submit">Read More</button></div> <!-- /post__inner --></article>');
    // });


    // // ----- Mobail menu button -----
    // $('.header__btnMobail').on('click', function () {
    //     $('.mobailMenu').addClass('mobailMenu--open');
    // });

    // $('.mobailMenu__inner').on('click', function () {
    //     $('.mobailMenu').removeClass('mobailMenu--open');
    // });


    // // Search
    // $('.header__search-inner .header__search').on('click', function () {

    //     $('.searchModal').slideToggle();
    // });


    $('.booking__input').datepicker({ dateFormat: 'd MM, yyyy, DD' });



    // Навигация для input
    $('<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>').insertAfter('.booking__quantity input');
    $('.booking__quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    // ==========
    // Попап окна

    $('[data-popup]').click(function () {
        $('body').addClass('over-hide');
        $('.popup__wrap').addClass('active');
        $('.popup').removeClass('active');
        $('.' + $(this).data('popup')).addClass('active');

    });

    $('.popupBtn, .popup__close, .popup__overlay').click(function () {
        $('.popup__wrap').toggleClass('active');
        $('.fixedHeader').toggleClass('active');
        $('body').removeClass('over-hide');
        // $('[data-wrap-form]').removeClass('hidden');
        // $('[data-wrap-sent]').addClass('hidden');
    });


    // =====
    // Video
    $(".welcome__img-inner .welcome__btn--video").click(function () {
        $('.video_mess .video-block').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/K1jfd-QpK-c?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        $('.video_mess').fadeIn(200);
        $('.fon_black').fadeIn(200);
    });

    $(".fon_black, .video_mess .clos").click(function () {
        $('.fon_black').fadeOut(100);
        // $('.transfer').fadeOut(100);
        // $('.new_koll').fadeOut(100);
        $('.video_mess .video-block').html(" ");
        $('.video_mess').fadeOut(200);
    });

});

