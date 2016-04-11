/**
 * Created by Glutton on 2016/4/8.
 */
'use strict'
const Interface = require("./interface")
const ext = require("./extend")

let Bicycle = new Interface('Bicycle',['ride','wash','repair','assemble'])

let Speedstr = function () {//implements Bicycle
    function ride() {
        console.info("this is ride()");
    }

    function wash() {
        console.info("this is wash()");
    }

    function repair() {
        console.info("this is repair()");
    }

    function assemble() {
        console.info("this is assemble()");
    }
}

let BicycleShop = function () {

}

BicycleShop.prototype = {
    sellBicycle: function () {
        let bicycle = BicycleFactory('Speedstr')

        return bicycle;
    }
}

let BicycleFactory = function (str) {
    let bicycle;
    switch(str){
        case 'Speedstr' : bicycle = new Speedstr(); break;
        default: bicycle = null;
    }
    Interface.ensureInterface(bicycle, Bicycle)
    return bicycle
}