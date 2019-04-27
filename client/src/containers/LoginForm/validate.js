export default function (values) {
    let errors = {}

    if (!values.username) {
        errors.username = 'Username is required'        
    }

    if (values.username && (values.username.length < 3 || values.username.length > 30)) {
        errors.username = 'Username must between 3 and 30 characters'
    }

    if (!values.password) {
        errors.password = 'Password is required'
    }

    if (values.password && (values.password.length < 6 || values.password.length > 30)) {
        errors.password = 'Password must between 6 and 30 characters'
    }

    return errors
}