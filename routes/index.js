var express = require('express')
var router = express.Router()
var models = require('../models')

router.get('/', function(req, res) {
    console.log('Starting bottles route')
    let name = req.query.username;
    try {
        models['bottle'].findAll({
            where: {
                username: name
            }
        }).then(function(bottles){
            res.send({
                bottleList: bottles
            })
        })
    } catch(err) {
        res.send('Exception caught! : ' + err.message)
    }
})

module.exports = router