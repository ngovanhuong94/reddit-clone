import { reduxForm } from 'redux-form'
import LoginForm from './Component'
import validate from './validate'

export default reduxForm({
    form: 'login',
    validate
})(LoginForm)