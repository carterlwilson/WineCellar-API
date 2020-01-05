var express = require('express')
var routes = require('../routes/index')
var bottles = require('../routes/bottles')

var app = express()

app.use('/', routes)
app.use('/bottles', bottles)

module.exports = app