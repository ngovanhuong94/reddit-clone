const User = require('../models/User')
const LocalStrategy = require('passport-local').Strategy

module.exports = new LocalStrategy(function (username, password, done) {
    User.findOne({ username }, (err) => {
        if (err) { return done(err)}

        if (!user) { return done(null, false, { message: 'Incorrect username.'})}
        if (!user.comparePassword(password)) {
            return done(null, false, { message: 'Incorrect password.'})
        }

        return done(null, user.toJSON())
    })
})