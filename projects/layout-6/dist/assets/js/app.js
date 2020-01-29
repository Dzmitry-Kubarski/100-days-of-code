

$(function () {

    // Active link
    document.querySelectorAll('.nav li a').forEach(function (el) {
        if (window.location.pathname.indexOf(el.getAttribute('href')) > -1) {
            el.classList.add('active');
        }
    });


    // Button mobail
    $(".m_button").click(function () {
        $('body').toggleClass("active");
    });


    // ----- Слайдер Slick -----

    // $('.portfolio__slider').slick({
    //     dots: false,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     prevArrow: '<button class="product__slider-btn_prev product__slider-btn"><img src="img/btn-prev.svg" alt="arrow"></button>',
    //     nextArrow: '<button class="product__slider-btn_next product__slider-btn"><img src="img/btn-next.svg" alt="arrow"></button>',


    //     // ----- responsive slider -----
    //     responsive: [

    //         {
    //             breakpoint: 1240,
    //             settings: {
    //                 prevArrow: false,
    //                 nextArrow: false,
    //                 dots: true,

    //             }
    //         },

    //         {
    //             breakpoint: 567,
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



    // ------------ Dots -------
    $('.portfolio__dots-btn').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('data-id');
        var target = $(this).attr('href');

        $('.portfolio__slide').removeClass('active').hide();
        $('.portfolio__dots').find('.portfolio__dots-btn').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active').fadeIn();

        $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);

        return false;
    });


    // $('.header__btn, .nav__link--mobail, .nav__link').click(function () {

    //     var target = $(this).attr('href');
    //     $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
    //     return false;
    // });

});