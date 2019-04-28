import {
    REGISTER_REQUEST,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from '../constants'

import { register, login } from '../utils/api'

export const registerUser = (username, password) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
        // get token from api
        const token = await register(username, password)
        // save token to localstorage
        localStorage.setItem('token', token)
        // send to auth reducer
        dispatch({
            type: REGISTER_SUCCESS,
            payload: token
        })
    } catch (err) {
        // send to error reducer
        dispatch({
            type: REGISTER_ERROR,
            payload: err
        })
    }
}

export const loginUser = (username, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        // get token from login router
        const token = await login(username, password)
        // save token to localstorage
        localStorage.setItem('token', token)
        // send to auth reducer
        dispatch({
            type: LOGIN_SUCCESS,
            payload: token
        })
    } catch (err) {
        // send to error reducer
        dispatch({
            type: LOGIN_ERROR,
            payload: err 
        })
    }
}

export const logoutUser = () => dispatch => {
    localStorage.clear()
    dispatch({
        type: LOGOUT
    })
}