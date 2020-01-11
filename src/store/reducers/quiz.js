import {
    FETCH_QUIZES_SUCCESS,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZES_START,
    FETCH_QUIZ_SUCCESS,
    QUIZ_SET_STATE,
    QUIZ_FINISH,
    QUIZ_NEXT_QUESTION,
    QUIZ_RETRY_TEST
} from "../actions/actionTypes";

const initialState = {
    quizes: [],
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: null,
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
        case FETCH_QUIZ_SUCCESS:
            return {
                ...state,
                quiz: action.quiz,
                isLoading: false
            }
        case QUIZ_SET_STATE:
            return {
                ...state,
                answerState: action.answerState,
                results: action.results
            }
        case QUIZ_FINISH:
            return {
                ...state,
                isFinished: true
            }
        case QUIZ_NEXT_QUESTION:
            return {
                ...state,
                activeQuestion: action.nextQuestion,
                answerState: null
            }
        case QUIZ_RETRY_TEST:
            return {
                ...state,
                results: {},
                isFinished: false,
                activeQuestion: 0,
                answerState: null,
            }

        default:
            return state;
    }
}