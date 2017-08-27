/**
 * __filename
 */
console.log( __filename );


/**
 * __filename
 */
console.log( __dirname );


/**
 * setTimeout(cb, ms)
 */
function printHello(){
    console.log( "setTimeout!");
}
// setTimeout(printHello, 2000);


/**
 * clearTimeout(t)
 * @type {Object}
 */
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);


/**
 * setInterval(cb, ms)
 */
function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
// setInterval(printHello, 2000);



/**
 * process
 */
global.process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});
global.process.exit(100);



