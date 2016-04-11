/**
 * Created by Glutton on 2016/3/18.
 */
'use strict'

function Chain() {
    var name;
    this.set = function (name) {
        this.name = name;
        return this;
    }
    
    this.get = function (callback) {
        callback.call(this, this.name)
        return this
    }
    return this;
}

let chain = new Chain()
chain.set("glutton").get(console.info).set("lijun").get(console.info)