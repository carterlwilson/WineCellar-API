const Sequelize = require('sequelize')
const Strings = require('./strings')

const sequelize = new Sequelize(Strings.bottles_table_name, Strings.db_username,Strings.db_password,
    {
        host: Strings.db_name,
        dialect: Strings.db_dialects
    })

module.exports = { sequelize_instance : sequelize }

