/**
 * Created by Glutton on 2016/4/8.
 */
'use strict'

module.exports = function extend(subClass, superClass) {
    let F = function(){}
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    subClass.superClass = superClass.prototype;
    if(superClass.prototype.constructor == Object.prototype.constructor){
        superClass.prototype.constructor = superClass
    }
}