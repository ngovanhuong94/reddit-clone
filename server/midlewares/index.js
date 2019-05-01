const passport = require('passport')
exports.jwtAuth = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        if (err) return next(err)
        if (!user) return res.status(402).json({ message: 'Unauthorized'})
        req.user = user
        next()
    })(req, res)
}