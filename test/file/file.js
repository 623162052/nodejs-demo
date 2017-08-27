var fs = require("fs");

// 异步读取
fs.readFile('../temp/input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('../temp/input.txt');
console.log("同步读取: " + data.toString());

/**
 * 获取文件信息
 */
fs.stat('../temp/input.txt', function (err, stats) {
    console.log(stats.isFile()); 		//true
})