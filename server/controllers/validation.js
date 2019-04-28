const User = require('../models/User')
const validationRegister = require('../validation/register')
const validationLogin = require('../validation/login')

exports.validateRegister = async function (req, res, next) {
    const { isValid, errors } = validationRegister(req.body)

    if (!isValid) {
        return res.status(423).json(errors)
    }

    const { username } = req.body

    const user = await User.findOne({ username })
    errors.username = 'Username was used'

    if (user) {
        return res.status(423).json(errors)
    }

    return next()
}

exports.validateLogin = function (req, res, next) {
    const { isValid, errors } = validationLogin(req.body)

    if (!isValid) {
        return res.status(423).json(errors)
    }

    return next()
}