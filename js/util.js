/**
 * ES5
 * Created by Administrator on 2015/10/17.
 */
"use strict";

(function ($) {
    $(document).on("click", "[data-action]", function () {
        if(!($.isFunction(actionMethods[$(this).data("action")]))){
            console.error("not found method!");
            return;
        }
        actionMethods[$(this).data("action")].call(this);
    });
})(jQuery);

var actionMethods = {
    skipURL: function skipURL() {
        window.location.href = $(this).data("url");
    }
};