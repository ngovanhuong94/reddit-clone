import {
    REGISTER_REQUEST,
    REGISTER_ERROR,
    REGISTER_SUCCESS
} from '../constants'

import { register } from '../utils/api'

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