var express = require('express')
var routes = require('../routes/index')
var addBottle = require('../routes/add_bottle')
var removeBottle = require('../routes/remove_bottle')
var signup = require('../routes/signup')
var login = require('../routes/login')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/', routes)
app.use('/addBottle', addBottle)
app.use('/removeBottle', removeBottle)
app.use('/signup', signup)
app.use('/login', login)

module.exports = app