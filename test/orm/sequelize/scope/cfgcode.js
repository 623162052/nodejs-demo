const Sequelize = require('sequelize');
const sequelize = require('../pool');

const CfgCode = sequelize.define('t_sr_cfg_code', {
    CODE_ID: {
        type: Sequelize.DECIMAL,
        primaryKey: true
    },
    TENANT_ID: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PROV_CODE: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CODE_TYPE_CD: {
        type: Sequelize.STRING
    },
    CODE_NM: {
        type: Sequelize.STRING
    },
    VALID_FLAG: {
        type: Sequelize.STRING
    },
    CRT_TIME: {
        type: Sequelize.DATE
    }
}, {
    freezeTableName: true,
    timestamps: false,

    defaultScope: {
        where: {
            VALID_FLAG: 1
        }
    },
    scopes: {
        deleted: {
            where: {
                VALID_FLAG: 0
            }
        },
        test: {
            where: {
                CODE_TYPE_CD: 'test'
            }
        }
    }
});

module.exports = CfgCode;