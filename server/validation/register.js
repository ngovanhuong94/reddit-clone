const Validator = require('validator')


module.exports = function (values) {
    let errors = {}

    if (Validator.isEmpty(values.username)) {
        errors.username = 'Username is required'
    }

    if (Validator.isEmpty(values.password)) {
        errors.password = 'Username is required'
    }

    if (!Validator.isLength(values.username, { min: 3, max: 30 })) {
        errors.username = 'Username must between 3 and 30 characters'
    }

    if (!Validator.isLength(values.password, { min: 6, max: 30 })) {
        errors.password = 'Password must between 6 and 30 characters'
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}