import {CREATE_QUIZ_QUESTION, CREATE_QUIZ_RESET, CREATE_QUIZ_FETCH_START, CREATE_QUIZ_FETCH_SUCCESS, CREATE_QUIZ_FETCH_ERROR} from "../actions/actionTypes";

const initialState = {
    quiz: [],
    error: null,
    isLoading: false
}

export default function createReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_QUIZ_QUESTION:
            return {
                ...state,
                quiz: [...state.quiz, action.item]
            }
        case CREATE_QUIZ_RESET:
            return {
                ...state,
                quiz: []
            }
        case CREATE_QUIZ_FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case CREATE_QUIZ_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case CREATE_QUIZ_FETCH_ERROR:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state;
    }
}