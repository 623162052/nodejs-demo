const util = require('util');
const CfgCode = require('./cfgcode');

// 查询
// CfgCode.findOne({
//     where: {
//         CODE_TYPE_CD: 'T_SR_PROBLEM_PROCES@LANG_ID'
//     }
// }).then(code => {
//     console.log(util.inspect(code));
// });


// 查询
// CfgCode.scope('deleted').findOne({}).then(code => {
//     console.log(util.inspect(code));
// });


CfgCode.scope('deleted', 'test').findOne({}).then(code => {
    console.log(util.inspect(code));
});