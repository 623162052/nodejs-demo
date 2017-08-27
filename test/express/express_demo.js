var util = require('util');
var express = require('');
var url = require('url');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
    console.log(util.inspect(url.parse(req.url, true)));
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});