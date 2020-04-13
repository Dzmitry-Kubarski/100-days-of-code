$('.btn-calcs').on('click', function (event) {
    event.preventDefault();
    var id2 = $('#test').offset().top;
    $('body,html').animate({ scrollTop: id2 }, 500);
});