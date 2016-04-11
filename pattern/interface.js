/**
 * Created by Glutton on 2016/4/6.
 */
'use strict'

let Interface = function (name, methods) {
    if(arguments.length<2){
        throw  new Error("Interface constructor called " + arguments.length +"! but expected exactly 2!")
    }
    this.name = name;
    this.methods = []
    if(!Array.isArray(methods)){
        throw new Error("the second arguments expected Array!")
    }
    methods.forEach(function (value, index) {
        if(typeof value !== 'string'){
            throw new Error("Interface methods name expected a string!")
        }
        this.methods.push(value)
    }.bind(this))

}

Interface.ensureInterface = function (instance,...interfaceList) {
    for(let i=0;i<interfaceList.length;i++){
        let itf = interfaceList[i]
        if(!(itf instanceof Interface)){
            throw new Error("Function Interface.ensureInterface interfaceList must be instance of Interface")
        }
        itf.methods.forEach(function (value, index) {
            if(!instance[value] && typeof instance[value] !== 'function'){
                throw new Error(`Function Interface.ensureInterface: Object does not implements the ${value} of ${itf.name}  was not found!` )
            }
        })
    }

}

let Animal = new Interface('Animal', ['eat','sleep'])

let Cat = function () {//implement Animal
    Interface.ensureInterface(this, Animal)
}
Cat.prototype.eat = function () {
    console.info("cat is eating!");
}

Cat.prototype.sleep = function () {
    console.info("cat is sleeping!");
}

let smallCat = new Cat();
smallCat.eat()

module.exports = Interface