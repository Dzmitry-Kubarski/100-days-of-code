// ---- Search ----

$('.btnSearch').on('click', function () {

    $('.searchModal').slideToggle();
    $('.search__overlay').fadeIn(200);
});

$('.search__overlay, .searchModal__close').click(function () {
    $('.search__overlay').fadeOut(100);
    $('.searchModal').slideToggle();
});


// Search close on click "Esc"
$(document).keydown(function (eventObject) {
    if (eventObject.which == 27) {
        $('.searchModal').hide();
    };
});