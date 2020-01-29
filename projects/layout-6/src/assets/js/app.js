

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

});
