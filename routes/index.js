var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.send('base route for wineCellar')
})

module.exports = router