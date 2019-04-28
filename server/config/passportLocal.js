const User = require('../models/User')
const LocalStrategy = require('passport-local').Strategy

module.exports = new LocalStrategy(async function (username, password, done) {
    try {
        // find one user   
        const user = await User.findOne({ username })
        // username not found in database
        if (!user) { return done(null, false, { message: 'Incorrect username.'})}
        // run comparePassword
        const valid = await user.comparePassword(password)
        // not valid password
        if (!valid) { return done(null, false, { message: 'Incorrect password.'})}
        // success
        return done(null, user.toJSON())
    } catch (err) {
        done (err)
    }
})