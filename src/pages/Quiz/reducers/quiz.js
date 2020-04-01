import {
    QUIZ_FETCH_SUCCESS,
    QUIZ_SET_STATE,
    QUIZ_FINISH,
    QUIZ_NEXT_QUESTION,
    QUIZ_RETRY_TEST
} from "../constants";

const initialState = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: null,
    isLoading: false
}


export default function quizeReducer(state = initialState, action) {
    switch (action.type) {
        case QUIZ_FETCH_SUCCESS:
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