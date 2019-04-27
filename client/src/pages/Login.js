import React from 'react'
import Container from '../components/Container'
import Section from '../components/Section'
import LoginForm from '../containers/LoginForm'


class Login extends React.Component {
    render () {
        return (
            <Container small>
                <Section padded>
                    <LoginForm />
                </Section>
            </Container>
        )
    }
}


export default Login