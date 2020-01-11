import {FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR, FETCH_QUIZES_START} from "../actions/actionTypes";

const initialState = {
    quizes: [],
    error: null,
    isLoading: false
}

export default function quizeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUIZES_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_QUIZES_SUCCESS:
            return {
                ...state,
                quizes: action.quizes,
                isLoading: false
            }
        case FETCH_QUIZES_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}