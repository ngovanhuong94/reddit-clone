import { reduxForm } from 'redux-form'

import validate from './validate'
import RegisterForm from './Component'


export default reduxForm({
    form: 'register',
    validate
})(RegisterForm)