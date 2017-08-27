var mysql = require('mysql');

var pool = mysql.createPool({
    host: '10.174.43.50',
    user: 'ngwf',
    password: '5!-AHiq5',
    database: 'ngwf_dev'
});

module.exports = pool;
