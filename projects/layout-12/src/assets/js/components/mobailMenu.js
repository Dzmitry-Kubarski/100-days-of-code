// ----- Mobail menu button -----

$(".btnMenu").click(function () {
    $(".menu").animate({ left: "0px" }, 300);
    $(".js-overlay").show();
});

$('.menu__link').click(function () {

    let target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
    return false;
});


$(".menu__close, .js-overlay, .menu__link").click(function () {
    $(".menu").animate({ left: "-100%" }, 300);
    $(".js-overlay").hide();
});


