/**
 * Created by Administrator on 2015/10/17.
 */
"use strict";

(function ($) {
    $(document).on("click", "[data-action]", function () {
        actionMethods[$(this).data("action")].call(this);
    });
})(jQuery);

var actionMethods = {
    skipURL: function skipURL() {
        console.info(this);
        window.location.href = $(this).data("url");
    }
};