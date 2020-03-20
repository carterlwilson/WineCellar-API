var express = require('express')
var router = express.Router()
var models = require('../models')

router.post('/',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

