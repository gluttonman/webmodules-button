/**
 * Created by Glutton on 2016/3/14.
 */
'use strict'
let Book = require("./book")
let history = new Book("glutton", "this is test!")
console.info(history.getAuthor());
history.display();