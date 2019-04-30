import React from 'react'
import Container from '../components/Container'
import Section from '../components/Section'
import CreatePostForm from '../containers/CreatePostForm'

class CreatePost extends React.Component {
    render () {
        return (
            <Container small>
                <Section padded>
                    <CreatePostForm />
                </Section>
            </Container>
        )
    }
}


export default CreatePost