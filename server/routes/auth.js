const User = require('../models/User')
const jwt = require('jsonwebtoken')
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
    const { username, password } = req.body
    res.send({ username, password })
})

module.exports = router