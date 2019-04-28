import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import LoginForm from './Component'
import validate from './validate'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { loginUser } from '../../actions/auth'

const mapStateToProps = (state) => ({
    error: state.error,
    token: state.auth.token
})

export default compose(
    reduxForm({ form: 'login', validate }),
    connect(mapStateToProps, { loginUser })
)(withRouter(LoginForm))