/**
 * Created by Administrator on 2015/10/17.
 */
"use strict";

(function ($) {
    $(document).on("click", "[data-action]", function () {
        var a = 0;
        var b = 0;
        if (!$.isFunction(actionMethods[$(this).data("action")])) {
            console.error("not found method!");
            return;
        }
        actionMethods[$(this).data("action")].call(this);
    });
})(jQuery);

var actionMethods = {
    skipURL: function skipURL() {
        window.location.href = $(this).data("url");
    },
    switchContent: function switchContent() {
        var style = $(this).data("style") || "checked";
        var $targetContent = $(this).data("target");
        var $btnSiblings = $(this).addClass(style).siblings("[data-action]");
        $btnSiblings.removeClass(style);
        $btnSiblings.forEach(function (item) {
            console.info($(item));
        });
    }

};