var os = require("os")

// 返回操作系统的默认临时文件夹
var tempPath = os.tmpdir();
console.log("tempPath: " + tempPath);

// 返回操作系统的主机名
var hostName = os.hostname();
console.log("hostName: " + hostName);

/**
 * 操作系统名
 */
var osType = os.type();
console.log("osType: " + osType);

/**
 * 操作系统名
 */
var platform = os.platform();
console.log("platform: " + platform);



console.log(os.release());
console.log(os.loadavg());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.cpus());
console.log(os.networkInterfaces());

