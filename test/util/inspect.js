/**
 * util.inspect
 * 将任意对象转换 为字符串的方法，通常用于调试和错误输出
 */
var util = require('test/util/inherits');

function Person() {
    this.name = 'byvoid';
    this.toString = function () {
        return this.name;
    };
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
