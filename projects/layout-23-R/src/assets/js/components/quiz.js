
var number = 0;
var maxNumber = $(".quiz__question").length;
var $element = $(".quiz__question").find("input, select, textarea");
var btnNext = $('.quiz__btn-next');
var isValid;
var dataBlock;
var activeSlede = [];

for (var i = 0; i < maxNumber; i++) {
    activeSlede[i] = false;
}

$(".quiz__num-current").text(number + 1);
$(".quiz__num-all").text(maxNumber - 2);

$element.on('change, input', function (e) {
    var value = $(this).val().trim();

    isValid = value !== "";
    btnActive(!isValid);
});

function btnActive(isValid) {
    if (number === 0) {
        btnNext.prop('disabled', isValid);
        $('.quiz__btn-error').hide();
    } else {
        $('.quiz__btn-error').hide();
        if (activeSlede[number] === true || isValid === false) {
            btnNext.prop('disabled', false);
            $('.quiz__btn-error').hide();
        } else {
            btnNext.prop('disabled', true);
            $('.quiz__btn-error').show();
        }
    }
}

var lbs = false;
$('.quiz__btn-error').on('click', function (event) {
    event.preventDefault();
    $(this).addClass('active');

    if (!lbs) {
        setTimeout(function () {
            $('.quiz__btn-error').removeClass('active');
            lbs = false;
        }, 3000);
        lbs = true;
    }
});

$("input[name='qw8']").on('change, input', function () {

    if ($(this).hasClass('vit')) {
        $('.input-end').attr('placeholder', '*Ваш телефон в Viber');
        $('.eml').hide();
    } else if ($(this).hasClass('wat')) {
        $('.input-end').attr('placeholder', '*Ваш телефон в WhatsApp');
        $('.eml').hide();
    } else if ($(this).hasClass('teg')) {
        $('.input-end').attr('placeholder', '*Ваш телефон в Telegram');
        $('.eml').hide();
    } else if ($(this).hasClass('phn')) {
        $('.input-end').attr('placeholder', '*Ваш телефон ');
        $('.eml').fadeIn();
    }
});


// sidebar

function progress(num) {
    $('.progress__item').eq(num).addClass('active');
}
progress(0);


// btn

function btnClick() {

    btnNext.on('click', function (event) {
        event.preventDefault();
        activeSlede[number] = true;
        ++number;

        btnActive(!isValid);

        if (activeSlede[number] === true) {
            btnNext.prop('disabled', false);
            $('.quiz__btn-error').hide();
        } else {
            btnNext.prop('disabled', true);
            $('.quiz__btn-error').show();
        }

        if (number === maxNumber - 2) {
            $(".quiz__btn-wrap").hide();
            $(".quiz__banner-inner, .quiz__banner").hide();
            $(".quiz__question, .test__inner").hide();
            $(".quiz").hide();
            $(".data-loading").fadeIn(600);
            $('.data-loading__bg').animate({
                'width': "100%",
            },
                3700);
            setTimeout(function () {
                $(".data-loading").hide();
                $(".test__inner").addClass('ends');
                $(".test__quests-progress").hide();
                $('.quiz-title').text('Готово!');
                $(".quiz").show();
                $(".question__img-end").show();
                $(".test__inner").show().addClass('end');
                $(".quiz__question").eq(number + 1).fadeIn(600);
                $(".quiz__banner-inner .end, .quiz__banner").fadeIn(600);
                // $('.hand-end').fadeIn();
            }, 4000);
        } else {
            $(".quiz__question").hide();
            $(".quiz__question").eq(number).fadeIn(600);
        }

        if (number === maxNumber - 1) {
            $(".quiz__banner-inner").hide();
            $(".quiz__banner-inner .end").fadeIn(500);
            // btnNext.hide();

        }


        progress(number);

        animateTop();
        // $('.test-left-img').attr({'src': 'assets/img/test/a-'+ (number + 1) +'.png'});
        $(".quiz__num-current").text(number + 1);
    });


}
btnClick();

function animateTop(eq) {
    var elem = $('.test-scroll-js');
    var top = elem.offset().top - 15;
    $('body,html').animate({ scrollTop: top }, 400);
}


$.fn.hasAttr = function (name) {
    return this.attr(name) !== undefined;
};



var nForm = false;
$(function () {
    'use strict';
    // var action = './assets/mailer/send.php';
    $('form').on('submit', function (e) {
        e.preventDefault();
        var formThis = $(this);
        var fd = new FormData(this);

        var dopT3 = '';
        var dopT4 = '';

        formThis.find('.btn').attr({
            'disabled': 'true'
        });



        formThis.find('input[name="qw3"]').each(function (index, el) {
            if ($(this).prop('checked')) {
                dopT3 += $(this).val() + ', ';
            }
        });
        fd.append('qw3', dopT3);

        formThis.find('input[name="qw4"]').each(function (index, el) {
            if ($(this).prop('checked')) {
                dopT4 += $(this).val() + ', ';
            }
        });
        fd.append('qw4', dopT4);

        if (formThis.find('input[name="formname"]').val() === "price") {
            var link = document.createElement('a');
            link.setAttribute('href', 'docs/price.pdf');
            link.setAttribute('target', "_blank");
            link.setAttribute('download', '');

            if (navigator.userAgent.indexOf('Mac') > 0) {
                window.location = 'docs/price.pdf';
            } else {
                simulate(link, "click");
            }

            $('html').addClass('stop');
            $(".overlay").fadeOut();
            $("#modal-thank").fadeIn();
            formThis.find('.btn').removeAttr('disabled');

        } if (formThis.find('input[name="formname"]').val() === "p2") {
            var link = document.createElement('a');
            link.setAttribute('href', 'docs/1.pdf');
            link.setAttribute('target', "_blank");
            link.setAttribute('download', '');

            if (navigator.userAgent.indexOf('Mac') > 0) {
                window.location = 'docs/1.pdf';
            } else {
                simulate(link, "click");
            }

            $('html').addClass('stop');
            $(".overlay").fadeOut();
            $("#modal-thank").fadeIn();
            formThis.find('.btn').removeAttr('disabled');

        } else if (formThis.find('input[name="formname"]').val() === "test") {


            formThis.find('input').attr({
                'disabled': 'true',
            });
            formThis.find('button').attr({
                'disabled': 'true',
            });

            $(".overlay").fadeOut();
            $('html').addClass('stop');
            $("#modal-thank").fadeIn();
        } else if (formThis.find('input[name="formname"]').val() === "proj") {


        } else {
            $(".overlay").fadeOut();
            $('html').addClass('stop');
            $("#modal-thank").fadeIn();
            formThis.find('.btn').removeAttr('disabled');

        }

        // formThis.find('.btn').removeAttr('disabled');
        $('form').trigger('reset');

        $.ajax({
            url: action,
            type: 'POST',
            contentType: false,
            processData: false,
            data: fd,
            success: function (msg) {



            },

        });
    });
});




