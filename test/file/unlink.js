var fs = require("fs");

fs.unlink('../temp/newinput.txt', function(err) {
    if (err) {
        return console.error(err);
    }
});