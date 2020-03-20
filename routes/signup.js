var express = require('express')
var router = express.Router()
var models = require('../models')
var passport = require('../config/passport')

router.post('/', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
}))

module.exports = router