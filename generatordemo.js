/**
 * Created by Glutton on 2016/2/3.
 */
'use strict'

function* fibonacci() {
    let prev = 0
    let curr =1
    for (;;) {
        prev = curr;
        curr = prev+curr;
        yield curr;
    }
}

for (let n of fibonacci()) {
    if (n > 1000) break;
    console.log(n);
}


let obj = {name : "lily", age : 12};
for(let o in obj){
    console.info(o);
}

