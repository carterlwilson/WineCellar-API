var app = require('../app/app');
var debug = require('debug')('express-sequelize');
var http = require('http');
var models = require('../models');

var port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

var server = http.createServer(app)

models.sequelize.sync().then(function() {
    server.listen(port, function() {
        console.log('Express server listening on port ' + server.address().port)
    })
    server.on('error', onError)
    server.on('listening', onListening)
    try {
        models.sequelize.authenticate()
        console.log('\nauthenticated')
    } catch(err) {
        console.log(err)
    }
})

function normalizePort(val) {
    var port = parseInt(val, 10)

    if (isNaN(port)) {
        return val
    }

    if (port >= 0) {
        return port
    }

    return false
}

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    console.log('Listening on ' + bind);
  }