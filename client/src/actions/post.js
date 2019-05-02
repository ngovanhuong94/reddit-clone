import {
    CREATE_POST_ERROR,
    CREATE_POST_SUCCESS,
    CREATE_POST_REQUEST
} from '../constants'
import { createPost } from '../utils/api'



export const attemptCreatePost = (body) => async (dispatch, getState) => {
    dispatch({ type: CREATE_POST_REQUEST })
    try {
        const { token } = getState().auth
        const newPost = await createPost(body, token)
        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: newPost
        })
    } catch (err) {
        dispatch({ 
            type: CREATE_POST_ERROR,
            payload: err
        })
    }
}