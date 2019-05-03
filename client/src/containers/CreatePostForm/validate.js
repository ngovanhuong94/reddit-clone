export default function (values) {
    let errors = {}
    
    if (!values.title) {
        errors.title = 'Title is required'
    }

    if (!values.category) {
        errors.category = 'Category is required'
    }

    if (!values.link && !values.text) {
        errors.link = 'Please type link or text'
        errors.text = 'Please type link or text'
    }

    return errors 
}