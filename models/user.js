'use strict';

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
        username: DataTypes.TEXT,
        password: DataTypes.TEXT,
    })
    return User
}
