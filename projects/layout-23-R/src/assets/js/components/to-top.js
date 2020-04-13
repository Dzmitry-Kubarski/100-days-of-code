var offsetTop = $(window).height() * 2;
$(window).scroll(function (event) {
    if ($(document).scrollTop() > offsetTop) {
        $('.to-top').addClass('active');
    } else {
        $('.to-top').removeClass('active');
    }
});
$(".to-top").on("click", function (event) {
    var top = 0;
    $('body,html').animate({ scrollTop: top }, 1000);
});