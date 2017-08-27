/**
 * sequelize
 * @type {Sequelize}
 */
const util = require('util');
const CfgCode = require('./cfgcode');
const sequelize = require('./pool');

// 新增数据 TODO: 返回自增主键
CfgCode.create(
    {
        TENANT_ID: '100000',
        PROV_CODE: '00030016',
        CODE_TYPE_CD: 'test',
        CODE_NM: '测试1',
        VALID_FLAG: 1,
        CRT_TIME: '2017-08-25 11:11:11'
    }).then(code => {
    console.log(code);
});

