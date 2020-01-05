var express = require('express')
var router = express.Router()
var models = require('../models')

router.get('/', function(req, res) {
    console.log('Starting bottles route')
    try {
        models['bottle'].findAll().then(function(bottles){
            console.log(bottles)
            res.send({
                bottleList: JSON.stringify(bottles)
            })
        })
    } catch(err) {
        res.send('Exception caught! : ' + err.message)
    }
})

module.exports = router