(function ($) {

    $.fn.blink = function (options) {

        if (typeof options === 'undefined') {
            options = {};
        }

        // Check for data-attributes for configuring per-item.
        // $.fn.html5data is declared in dependency jquery-html5data.
        // Used to avoid polluting global data-attribute namespace.
        options = $.extend(
            this.html5data('blink'),
            options
        );

        var settings = $.extend(
            {
                delay: 500
            },
            options
        );

        return this.each(function (index, element) {
            setInterval(function () {
                if ($(element).css('visibility') === 'visible') {
                    $(element).css('visibility', 'hidden');
                }
                else {
                    $(element).css('visibility', 'visible');
                }
            }, settings.delay);
        });
    };
}(jQuery));
