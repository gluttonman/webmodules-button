/**
 * Created by Glutton on 2016/3/17.
 */
'use strict'
let singleton = function () {
    let a =10;

    return {
        add : function (b) {
            return b+a;
        }
    }
}()
console.info(singleton.add(1))

let Sky = function () {
    var instance;

    function Incream (){
        this.index = 0
        this.add = function () {
            this.index++
        }
        this.getIndex = function () {
            return this.index
        }
    }
    return {
        getInstance: function () {
            if(!instance){
                instance = new Incream()
            }
            return instance;
        }
    }
}()



let s1 = Sky.getInstance()
s1.add();
let s2 = Sky.getInstance()
s2.getIndex();

console.info(s2.getIndex());