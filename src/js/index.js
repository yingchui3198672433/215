/*
 * @Author: ZXY 
 * @Date: 2019-02-15 09:19:27 
 * @Last Modified by: ZXY
 * @Last Modified time: 2019-02-15 09:25:07
 */

var data = require('./data/list.json');
console.log(data)

function init() {
    getData();
}

init();

function getData() {
    $.ajax({
        url: './data/list.json',
        success: function() {

        }
    })
}