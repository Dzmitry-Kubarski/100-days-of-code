// ----- Mobail menu button -----

// $(".btnMenu").click(function () {
//     $(".menu").animate({ left: "0px" }, 300);
//     $(".js-overlay").show();
// });

// $('.menu__link').click(function () {

//     var targetAttr = $(this).attr('href');
//     $('html, body').animate({ scrollTop: $(targetAttr).offset().top }, 1000);
//     return false;
// });


// $(".menu__close, .js-overlay, .menu__link").click(function () {
//     $(".menu").animate({ left: "-100%" }, 300);
//     $(".js-overlay").hide();
// });


// Search
// $('.btnMenu').on('click', function () {

//     $('.mainMenu__list').slideToggle();
// });

$('.btnMenu--open').on('click', function () {
    $('.mainMenu__list').addClass('open');
    $(this).hide();
    $('.btnMenu--close').show();
});

$('.btnMenu--close').on('click', function () {
    $(this).hide();
    $('.mainMenu__list').removeClass('open');
    $('.btnMenu--open').show();

});


// --------------------------

// $('.btnMenu--open').on('click', function () {
//     $('.mainMenu__list').slideToggle(300, function () {

//         if ($(this).css('display') === 'none') {
//             $(this).removeAttr('style');
//         }
//     });
// });


