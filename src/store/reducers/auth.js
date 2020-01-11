import {
    AUTH_LOGOUT,
    AUTH_FETCH_START,
    AUTH_FETCH_SUCCESS,
    AUTH_FETCH_ERROR
} from "../actions/actionTypes";

const initialState = {
    token: null,
    error: null,
    isFetching: false
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_FETCH_START:
            return {
                ...state,
                isFetching: true
            }
        case AUTH_FETCH_SUCCESS:
            return {
                ...state,
                token: action.token,
                isFetching: false
            }
        case AUTH_FETCH_ERROR:
            return {
                ...state,
                error: action.error,
                isFetching: false
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                token: null
            }

        default:
            return state;
    }
}