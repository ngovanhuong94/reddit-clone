import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CreatePostForm from './Component'

const mapStateToProps = (state) => ({
    token: state.auth.token 
})

export default compose(
    reduxForm({ form: 'create-post'}),
    connect(mapStateToProps)
)
(withRouter(CreatePostForm))