import React from 'react'
import { Field } from 'redux-form'
import Form from '../../components/Form'
import Alert from '../../components/Alert'
import renderField from '../../components/Form/renderField'
import Button from '../../components/Button'

class LoginForm extends React.Component {
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

    componentWillReceiveProps (nextProps) {
        if (nextProps.error) {
            this.setState({ error: nextProps.error })
        }
    }

    onSubmit = ({ username, password }) => {
        this.props.loginUser(username, password)
    }
    render (){
        const { error } = this.state
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                { error && <Alert>{error.message}</Alert>}
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