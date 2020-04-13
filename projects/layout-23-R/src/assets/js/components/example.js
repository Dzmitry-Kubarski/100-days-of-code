var offsetTop2 = $('#example').offset().top - $(window).height() - 110;
var lbl = false;
$(window).scroll(function (event) {
    offsetTop2 = $('#example').offset().top - $(window).height() - 110;
    if ($(document).scrollTop() > offsetTop2) {

        if (!lbl) {
            $(".twentytwenty-container").twentytwenty({
                default_offset_pct: 0.5,
                orientation: 'horizontal',
                move_slider_on_hover: true,
            });
            lbl = true;
        }
    }
});