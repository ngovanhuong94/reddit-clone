import React from 'react'
import Form from '../../components/Form'
import Input from '../../components/Input'

class RegisterForm extends React.Component {
    render () {
        return (
            <Form>
                <Form.Item>
                    <Input 
                        type="text"
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item>
                    <Input 
                        type="text"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Input 
                        type="text"
                        placeholder="Confirm password"
                    />
                </Form.Item>
            </Form>
        )
    }
}


export default RegisterForm