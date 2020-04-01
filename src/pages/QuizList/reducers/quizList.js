import {
    QUIZES_FETCH_START,
    QUIZES_FETCH_SUCCESS,
    QUIZES_FETCH_ERROR,
} from "../constants";

const initialState = {
    quizes: [],
    isLoading: false,
    error: null
}


export default function quizeListReducer(state = initialState, action) {
    switch (action.type) {
        case QUIZES_FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case QUIZES_FETCH_SUCCESS:
            return {
                ...state,
                quizes: action.quizes,
                isLoading: false
            }
        case QUIZES_FETCH_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }

        default:
            return state;
    }
}