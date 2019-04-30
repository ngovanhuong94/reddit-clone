import React from 'react'
import { Field } from 'redux-form'
import Form from '../../components/Form'
import renderField from '../../components/Form/renderField'
import Button from '../../components/Button'

class CreatePostForm extends React.Component {
    componentDidMount () {
        if (!this.props.token) {
            this.props.history.push('/login')
        }
    }
    render () {
        return (
            <Form>
                <Field 
                    name="title" 
                    placeholder="Title" 
                    type="text"
                    component={renderField}
                />
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}

export default CreatePostForm