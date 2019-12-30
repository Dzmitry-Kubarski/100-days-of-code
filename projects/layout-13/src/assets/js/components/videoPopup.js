
// ---- VideoPopup ----
$(".welcome__img-inner .welcome__btn--video").click(function () {
    $('.video__wrap .video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/K1jfd-QpK-c?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $('.video__wrap').fadeIn(200);
    $('.video__overlay').fadeIn(200);
});

$(".video__overlay, .video__wrap .video__close").click(function () {
    $('.video__overlay').fadeOut(100);
    $('.video__wrap .video').html(" ");
    $('.video__wrap').fadeOut(200);
});