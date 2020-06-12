


$(function () {


    // ------------ Tabs Slider -------
    $('.dots__btn').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.slider__item').removeClass('active').hide();
        $('.dots__btn').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active').fadeIn();
        return false;
    });



    // ------------ Tabs Calc-item -------
    $('.calculator__dots-btn').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.calculator-item').removeClass('active').hide();
        $('.calculator__dots-btn').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active').fadeIn();
        return false;
    });


    // // ------ Form -------
    // var btn = document.querySelector('.form__btn');
    // var inp = document.querySelector('.form__input');

    // function addAlert() {
    //     if (inp.value !== '') {

    //         var id = $(this).attr('data-id');
    //         $('body').addClass('over-hide');
    //         $('.popup__wrap').addClass('active');
    //         $('.popup').removeClass('active');
    //         $('#' + id).addClass('active');
    //     }
    // }


    // $('.popup__close, .popup__overlay').click(function () {
    //     $('.popup__wrap').toggleClass('active');
    //     $('body').removeClass('over-hide');
    // });


    // btn.addEventListener('click', addAlert);


    // ------ Form -------
    $('.form__btn').on('click', function (event) {






        if ($('.form__input').val() !== '') {
            event.preventDefault();


            var id = $(this).attr('data-id');
            $('body').addClass('over-hide');
            $('.popup__wrap').addClass('active');
            $('.popup').removeClass('active');
            $('#' + id).addClass('active');
        }
    });


    $('.popup__close, .popup__overlay').click(function () {
        $('.popup__wrap').toggleClass('active');
        $('body').removeClass('over-hide');
    });



    // var btn = document.querySelector('.form__btn');
    // var inp = document.querySelector('.form__input');

    // function addAlert() {
    //     if (inp.value !== '') {

    //         var id = $(this).attr('data-id');
    //         $('body').addClass('over-hide');
    //         $('.popup__wrap').addClass('active');
    //         $('.popup').removeClass('active');
    //         $('#' + id).addClass('active');
    //     }
    // } 


    // btn.addEventListener('click', addAlert);


});