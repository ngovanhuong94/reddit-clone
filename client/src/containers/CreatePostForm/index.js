import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CreatePostForm from './Component'
import validate from './validate'

import { attemptCreatePost } from '../../actions/post'

const mapStateToProps = (state) => ({
    token: state.auth.token,
    newPost: state.post.newPost 
})

export default compose(
    reduxForm({ form: 'create-post', validate }),
    connect(mapStateToProps, { attemptCreatePost })
)
(withRouter(CreatePostForm))