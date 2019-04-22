import React from 'react'
import Container from '../components/Container'
import Section from '../components/Section'
import RegisterForm from '../containers/RegisterForm'


class Register extends React.Component {
    render () {
        return (
            <Container small>
                <Section padded>
                    <RegisterForm />
                </Section>
            </Container>
        )
    }
}

export default Register