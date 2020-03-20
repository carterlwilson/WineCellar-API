
var express = require('express');
var router = express.Router();
var models = require('../models');
let cookieParser = require('cookie-parser');


router.get('/', function(req, res) {
    console.log("starting passport");
    models["user"].findOne({ where: {
        username: req.body.username.toLowerCase()
        }}).then((user) => {
        if (user != null) {
            let password = req.body.password;
            if (password == user.password) {
                const message = {};
                message.body = "login successful";
                message.success = "true";
                message.status = 200;
                res.cookie("username", req.body.username);
                res.status(message.status).send(message);
            } else {
                const message = {};
                message.body = "incorrect password";
                message.success = "false";
                message.status = 401;
                res.status(message.status).send(message);
            }
        } else {
            const message = {};
            message.body = "user not found";
            message.success = "false";
            message.status = 401;
            res.status(message.status).send(message);
        }
    })
})

module.exports = router
