import { 
    REGISTER_ERROR
} from '../constants'

const initialState = null

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_ERROR:
            return action.payload
        default:
            return state
    }
}