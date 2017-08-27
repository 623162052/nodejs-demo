/**
 * test module
 */
// var hello = require('./hello');
// hello.world1();

var Hello = require('./hello');
hello = new Hello();
// hello.world2();

hello.setName("alex");
hello.sayHello();
