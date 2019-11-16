$(function () {

    $('#headerMenu').on('click', function () {
        $('#menuList').slideToggle();
    });

    // Scroll

    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        var elementID = $(this).data('scroll');
        var elementOffset = $(elementID).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset
        });
    });

});