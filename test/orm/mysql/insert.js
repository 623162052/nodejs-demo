var connection = require('./connection');

connection.connect();

var addSql = "insert into t_sr_cfg_code (TENANT_ID, PROV_CODE, CODE_TYPE_CD, VALID_FLAG) values (?, ?, ?, ?)";
var addSqlParams = ['100000', '00030016', 'test', 1];

// 新增 - 手动事务
connection.beginTransaction(function (err) {
    if (err) {
        throw err;
    }

    connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
            connection.rollback(function () {
                throw err;
            });
        }
        connection.commit(function (err) {
            if (err) {
                connection.rollback(function () {
                    throw err;
                });
            }
            console.log('result: ' + JSON.stringify(result));
        });
    });

});