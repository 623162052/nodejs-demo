/**
 * util.inherits
 * JavaScript 的面向对象特性是基于原型
 */
var util = require('test/util/inherits');

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello ' + this.name);
    };
}

Base.prototype.showName = function () {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}

// Sub 仅仅继承了Base 在原型中定义的函数
util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
console.log(objSub);
