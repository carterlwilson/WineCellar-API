var express = require('express')
var routes = require('../routes/index')
var bottles = require('../routes/bottles')
var addBottle = require('../routes/add_bottle')
var removeBottle = require('../routes/remove_bottle')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use('/', routes)
// app.use('/bottles', bottles)
app.use('/addBottle', addBottle)
app.use('/removeBottle', removeBottle)

module.exports = app