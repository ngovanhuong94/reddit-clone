const User = require('../models/User')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const router = require('express').Router()
const { validateRegister, validateLogin } = require('../controllers/validation')

function createToken (user) {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: '1d'})
}

router.post('/register', validateRegister, async (req, res, next) => {
    const { username, password } = req.body
    const user = await User.create({ username, password })
    const token = createToken(user.toJSON())

    return res.json({ token })
})

router.post('/login', validateLogin,(req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err)}
        if (!user) { return res.status(401).json(info)}
        const token = createToken(user)

        return res.json({ token })
    })(req, res, next)
})

module.exports = router