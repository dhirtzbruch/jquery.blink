(function ($) {

    $.fn.blink = function (options) {
        var settings = $.extend({
            delay: 500
        }, options);

        return $(this).each(function (index, item) {
            setInterval(function () {
                if ($(item).css('visibility') === 'visible') {
                    $(item).css('visibility', 'hidden');
                }
                else {
                    $(item).css('visibility', 'visible');
                }
            }, settings.delay);
        });
    }
}(jQuery));
