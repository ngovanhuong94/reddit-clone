import React from 'react'
import { Field } from 'redux-form'
import Form from '../../components/Form'
import renderField from '../../components/Form/renderField'
import Button from '../../components/Button'

class LoginForm extends React.Component {
    onSubmit = ({ username, password }) => {
        console.log({ username, password })
    }
    render (){
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    component={renderField} 
                    name="username" 
                    type="text" 
                    placeholder="Username"
                />
                <Field
                    component={renderField} 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                />
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}

export default LoginForm