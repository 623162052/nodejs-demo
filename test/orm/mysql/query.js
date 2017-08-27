// var connection = require('./connection');
//
// connection.connect();
//
// // 查询
// connection.query("SELECT * from t_sr_cfg_code where code_type_cd = 'test' ", function (error, results, fields) {
//     if (error) {
//         throw error;
//     }
//
//     console.log('The solution is: ', JSON.stringify(results));
// });
//
// connection.end();


var pool = require('./pool');

pool.getConnection(function(err, conn){
    conn.query("select * from t_sr_cfg_code where code_type_cd = 'test' ", function(err, rows) {
        console.log(rows);
    })
});
