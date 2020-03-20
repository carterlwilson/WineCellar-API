var express = require('express')
var router = express.Router()
var models = require('../models')

router.post('/', function(req, res) {
        try {
            models["user"].findOne({
                where: {
                    username: req.body.username
                }
            }).then((user) => {
                if (user != null) {
                    const message = {};
                    message.body = "user exists"
                    message.success = false;
                    message.status = 409;
                    res.status(message.status).send(message);
                }
                else {
                    let newUser = models["user"].build({ username: req.body.username, password: req.body.password} );
                    newUser.save().then(() => {
                        res.redirect("/");
                    })
                }
            })
        }
        catch (e) {
            throw e;
        }
    })

module.exports = router