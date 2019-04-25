const router = require('express').Router()
const validationRegister = require('../validation/register')

router.get('/register', (req, res) => {
    const { isValid, errors } = validationRegister(req.body)

    if (!isValid) {
        return res.status(423).json(errors)
    }

    return res.send('Ok!')
})

module.exports = router