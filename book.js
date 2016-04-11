/**
 * Created by Glutton on 2016/3/14.
 */
'use strict'

let Book = module.exports = (function () {
    let numbook =0;
    let checkIds = function () {
        console.info("check passed!");
        return true;
    }
    var author, title;
    return function (a, t) {
        author = a;
        title = t;
        this.getAuthor = function () {
            return author;
        }
        this.getTitle = function () {
            return title;
        }
    }
})()

Book.prototype = {
    display: function () {
        console.info(this.getTitle());
    }
}