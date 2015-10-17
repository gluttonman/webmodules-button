/**
 * Created by Administrator on 2015/10/17.
 */
(($)=>{
    $(document).on("click","[data-action]", function () {
           actionMethods[$(this).data("action")].call(this);
    })
})(jQuery)

const actionMethods = {
    skipURL(){
        console.info(this);
        window.location.href = $(this).data("url");
    }
}