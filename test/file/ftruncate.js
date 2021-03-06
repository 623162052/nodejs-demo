var fs = require("fs");
var buf = new Buffer(1024);

fs.open('../temp/input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }

    // 截取文件
    fs.ftruncate(fd, 10, function(err){
        if (err){
            console.log(err);
        }

        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if (err){
                console.log(err);
            }

            // 仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }

            // 关闭文件
            fs.close(fd, function(err){
                if (err){
                    console.log(err);
                }
            });
        });
    });
});