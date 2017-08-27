/**
 * 匿名函数
 * @param someFunction
 * @param value
 */
// function execute(someFunction, value) {
//     someFunction(value);
// }
//
// execute(function (word) {
//     console.log(word)
// }, "Hello");

var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World 6");
    response.end();
}

http.createServer(onRequest).listen(8887);

// var http = require("http");
//
// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }).listen(8887);