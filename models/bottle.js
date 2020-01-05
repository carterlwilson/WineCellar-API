'use strict';

module.exports = (sequelize, DataTypes) => {
    var Bottle = sequelize.define('bottle', {
        winery_name: DataTypes.TEXT,
        vintage_year: DataTypes.BIGINT,
        varietal: DataTypes.TEXT
    })
    return Bottle
}
