var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const db = require('../models/index');
const seq = require('sequelize');
const DataTypes = seq.DataTypes;
const User = require('../models/User')(db.sequelize, DataTypes);



passport.use(new LocalStrategy(
    function(usernname, password, done) {
        console.log("starting passport")
        User.findOne({ username: username }, function (err,user) {
            ls
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.'});
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        })
    }
))

passport.use('local-signup', new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (user) {
                return done(null, false, req.flash('signumMessage', 'That username is already taken.'));
            }
            else {
                var newUser = new User();
                newUser.local.username = username;
                newUser.local.password = password;

                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                })
            }
        })
    }
))

module.exports = passport