/*
 * Created by Glutton on 2016/2/2.
 */
'use strict'

let set = new Set();
set.add(1);
set.add("a");
set.add(true)
set.add(1)
console.info(...set);


let array = new Array()
array.push(1,2,3,4,5,6)
let str = [...array]
console.info(...array);