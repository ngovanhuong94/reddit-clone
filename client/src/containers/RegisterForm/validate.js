export default function (values) {
    let errors = {}

    if (!values.username) {
        errors.username = 'Username required'
    }

    if (values.username && (values.username.length < 3 || values.username.length > 30)) {
        errors.username = 'Username must have between 3 and 30 characters'
    }

    if (!values.password) {
        errors.password = 'Password required'
    }

    if (values.password && (values.password.length < 6 || values.password.length > 30))  {
        errors.password = 'Password must have between 6 and 30 characters'
    }

    if (values.password !== values.password2) {
        errors.password2 = 'Passwords must match'
    }

    return errors
}