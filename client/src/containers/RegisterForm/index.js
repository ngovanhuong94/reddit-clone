import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Form from '../../components/Form'
import Button from '../../components/Button'
import renderField from '../../components/Form/renderField';

class RegisterForm extends React.Component {
    render () {
        return (
            <Form>
                <Field 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    component={renderField} 
                />
                <Field 
                    type="password"
                    name="password" 
                    placeholder="Password" 
                    component={renderField}
                />
                <Field 
                    type="password"
                    name="password2" 
                    placeholder="Confirm password" 
                    component={renderField}
                />
                <Button>Submit</Button>
            </Form>
        )
    }
}


export default reduxForm({
    form: 'register'
})(RegisterForm)