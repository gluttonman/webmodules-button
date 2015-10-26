/**
 * Created by Administrator on 2015/10/17.
 */
(($)=> {
    $(document).on("click", "[data-action]", function () {
        var a =0 ;
        var b =0;
        if (!($.isFunction(actionMethods[$(this).data("action")]))) {
            console.error("not found method!")
            return;
        }
        actionMethods[$(this).data("action")].call(this);
    })
})(jQuery)

const actionMethods = {
    skipURL(){
        window.location.href = $(this).data("url");
    },
    switchContent(){
        let style = $(this).data("style") || "checked";
        let $targetContent = $(this).data("target");
        let $btnSiblings = $(this).addClass(style).siblings("[data-action]");
        $btnSiblings.removeClass(style);
        $btnSiblings.forEach(function (item) {
            console.info($(item));
        })
    }

}