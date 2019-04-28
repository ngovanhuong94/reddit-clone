import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../constants'
import jwt_decode from 'jwt-decode'

const token = localStorage.getItem('token')
const user = token && jwt_decode(token)

const initialState = {
    loading: false,
    ...( token && { token }),
    ...( user && { user })
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_REQUEST,
             LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REGISTER_SUCCESS,
            LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload,
                user: jwt_decode(action.payload)
            }
        case REGISTER_ERROR,
             LOGIN_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}