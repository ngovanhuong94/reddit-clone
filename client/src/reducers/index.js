import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import errorReducer from './error'
import authReducer from './auth'
import postReducer from './posts'

export default combineReducers({
    form: formReducer,
    error: errorReducer,
    auth: authReducer,
    post: postReducer
})