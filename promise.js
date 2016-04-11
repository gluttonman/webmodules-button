/**
 * Created by Glutton on 2016/2/24.
 */
'use strict'
let promise = array.map(function (i) { return getJSON()});

/*传统方法和 promise方法的对比

function timeout(ms) {
    return new Promise(function (resole, reject) {
        console.info("promise is starting!");
        setTimeout(function () {
            resole(sum)
        }, ms)
        function sum(a, b) {
            return a+b;
        }
    })
}

timeout(1000).then(function (sum) {
    let value = sum(1,2)
    console.info("this is value:"+value);
})

function timeout(ms, callback) {
    setTimeout(function () {
        callback(sum)
    })
    function sum(a, b) {
        return a+b;
    }
}


timeout(100, function (sum) {
    let value = sum(1,2)
    console.info(value);
})*/