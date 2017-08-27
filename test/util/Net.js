var net = require("net");

console.log(net.isIP("127.0.0.1"));
console.log(net.isIPv4("127.0.0.1"));
console.log(net.isIPv6("127.0.0.1"));

// 建立TCP连接
net.createConnection({host: '10.174.43.50', port: 3306}, function () {
    console.log('连接到服务器！');
});