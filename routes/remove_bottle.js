var express = require('express')
var router = express.Router()
var models = require('../models')

router.post('/', function(req, res) {
    console.log('starting remove bottle route')
    models.bottle.destroy({
        where: {
            id: req.body.id
        }
    }).then(function() {
        console.log('removed bottle')
        res.redirect('/')
    })
})

module.exports = router