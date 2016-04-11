/**
 * Created by Glutton on 2016/3/14.
 */
'use strict'

Object.prototype.say = function () {
    console.info("this is extends");

}

Function.prototype.hello = function () {
    console.info("hello function!");
}
/*
let obj = {};

obj.say()
//obj.hello()
let f = function () {

}
f.hello()
f.say()*/
class O {}
let o = new O();
o.say()