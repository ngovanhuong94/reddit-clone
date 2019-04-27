import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { registerUser } from '../../actions/auth'

import validate from './validate'
import RegisterForm from './Component'

const mapStateToProps = (state) => ({
    error: state.error,
    loading: state.auth.loading,
    token: state.auth.token,
    user: state.auth.user
})

export default compose(
    reduxForm({ form: 'regsiter', validate }),
    connect(mapStateToProps, { registerUser })
)(withRouter(RegisterForm))
