var express = require('express')
var router = express.Router()
var models = require('../models')

router.post('/', function(req, res) {
    console.log('starting add bottle route')
    console.log(req.url + req.body)
    models.bottle.create({
        winery_name: req.body.winery_name,
        vintage_year: req.body.vintage_year,
        varietal: req.body.varietal,
        username: req.body.username.toLowerCase()
    }).then(function() {
        console.log('saved new bottle')
        res.redirect('/')
    })
})

module.exports = router