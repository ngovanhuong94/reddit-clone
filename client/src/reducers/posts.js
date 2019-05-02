import {
    CREATE_POST_REQUEST,
    CREATE_POST_ERROR,
    CREATE_POST_SUCCESS
} from '../constants'

const initialState = {
    loading: false,
    posts: [],
    newPost: null,
    post: null
}


export default function (state = initialState, action) {
    switch(action.type) {
        case CREATE_POST_REQUEST:
            return {
                ...state,
                loading: true 
            }
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                newPost: action.payload
            }
        case CREATE_POST_ERROR:
            return {
                ...state,
                loading: false
            }
        default: 
            return state
    }
}