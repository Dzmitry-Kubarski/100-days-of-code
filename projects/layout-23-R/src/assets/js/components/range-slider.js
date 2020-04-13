$(".js-range-slider").ionRangeSlider({
    min: 1,
    max: 100,
    from: 31,
    onStart: function (data) {
        $('#qw3inp').val($(".js-range-slider").prop("value"));
    },
});

var my_range = $(".js-range-slider");

my_range.on("change input", function () {
    var $inp = $(this);
    var from2 = $inp.data("from");
    $('#qw3inp').val(from2);

});

var my_range_instance = my_range.data("ionRangeSlider");
$('#qw3inp').on('change input', function () {
    var _val = $(this).val();
    my_range_instance.update({
        from: _val,
    });
});