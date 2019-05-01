const Validator = require('validator')

module.exports = function (values) {
    let errors = {}

    if (Validator.isEmpty(values.title)) {
        errors.title = 'Title is required'
    }

    if (Validator.isEmpty(values.category)) {
        errors.category = 'Category is required'
    }

    if (Validator.isEmpty(values.link) && Validator.isEmpty(values.text)) {
        errors.link = 'link or text is required'
        errors.text = 'link or text is required'
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}