import React from 'react'
import { Field } from 'redux-form'

import Form from '../../components/Form'
import Button from '../../components/Button'
import Alert from '../../components/Alert'
import Small from '../../components/Small'
import renderField from '../../components/Form/renderField';


class RegisterForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            error: null
        }
    }

    componentDidUpdate() {
        if (this.props.token) {
            this.props.history.push('/')
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.error) {
            this.setState({ error: nextProps.error })
        }
    }
    onSubmit = ({ username, password }) => {
        this.props.registerUser(username, password)
    }
    
    render () {
        const { error } = this.state
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                { error && <Alert>{error.message}</Alert> }
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
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}


export default RegisterForm