/**
 * Created by Glutton on 2016/4/6.
 */
'use strict'

let Animal = function (name, age) {
    this.name = name
    this.age = age
}

Animal.prototype.getAge = function () {
    return this.age
}

Animal.getName = function(){
    return this.name
}

console.info(typeof Animal.prototype["getAge"]);
console.info(Animal["getName"]);