/**
 * sequelize
 * @type {Sequelize}
 */
const util = require('util');
const CfgCode = require('./cfgcode');
const sequelize = require('./pool');

// 查询
// CfgCode.findAll({
//     where: {
//         CODE_TYPE_CD: 'T_SR_PROBLEM_PROCES@LANG_ID'
//     }
// }).then(codeList => {
//     console.log(util.inspect(codeList));
// });


// sum
CfgCode.sum('VALID_FLAG').then(sum => {
   console.log("VALID_FLAG: " + sum);
});