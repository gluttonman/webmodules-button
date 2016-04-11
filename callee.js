/**
 * Created by Glutton on 2016/3/11.
 */

'use strict'
/*
* 在严格模式下， arguments.callee是错误的
* */

var increame = function(x, y, z){
    var actual = arguments.length;
    //var expect = arguments.caller.length;
    console.info(actual);
    //console.info(expect);
}

function Increame() {
    
}