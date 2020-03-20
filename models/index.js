var Sequelize = require('sequelize');
const Strings = require('../config/config')['development']
// const Bottle = require('bottle')
db = {}

var sequelize = new Sequelize(Strings.database, Strings.username,Strings.password,
    {
        host: Strings.host,
        dialect: Strings.dialect
    })

db['bottle'] = sequelize.import(__dirname + "/bottle.js")
db['user'] = sequelize.import(__dirname + "/user.js")

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db