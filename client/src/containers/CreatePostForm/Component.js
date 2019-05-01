import React from 'react'
import { Field } from 'redux-form'
import Form from '../../components/Form'
import renderField from '../../components/Form/renderField'
import Button from '../../components/Button'
import categories from '../../categories'

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
                <Field 
                    name="title" 
                    placeholder="Choose a category" 
                    type="select"
                    options={categories}
                    component={renderField}
                />
                <Field 
                    name="link"
                    placeholder="Url"
                    type="text"
                    component={renderField}
                />
                <Field
                    name="text"
                    placeholder="Text" 
                    type="textarea"
                    component={renderField}
                />
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}

export default CreatePostForm