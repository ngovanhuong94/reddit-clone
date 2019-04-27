const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

module.exports = new JwtStrategy({
    secretOrKey: process.env.SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, (token, done) => done(null, token.user))