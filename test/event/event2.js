/**
 * on
 */
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
console.log("-----------------------------------");

/**
 * once
 */
emitter.once('connection', function (arg1) {
    console.log('Ah, we have our first user: ' + arg1);
});
emitter.emit('connection', 'arg1 参数');
emitter.emit('connection', 'arg1 参数');
console.log("-----------------------------------");

/**
 * addListener
 */
var customListener = function () {
    console.log('customListener');
}
emitter.addListener('customListener', customListener);
emitter.emit('customListener');
emitter.removeListener('customListener', customListener);
emitter.emit('customListener');
console.log("-----------------------------------");

/**
 * error event
 */
emitter.emit('error');
console.log("-----------------------------------");
