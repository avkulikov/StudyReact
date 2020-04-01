import axios from '../../../utils/axios/axios.quiz'

import {
    CREATE_QUIZ_QUESTION,
    CREATE_QUIZ_RESET,
    CREATE_QUIZ_FETCH_START,
    CREATE_QUIZ_FETCH_SUCCESS,
    CREATE_QUIZ_FETCH_ERROR
} from '../constants'

export function createQuizQuestion(item) {
    return {
        type: CREATE_QUIZ_QUESTION,
        item
    }
}

export function createQuizReset() {
    return {
        type: CREATE_QUIZ_RESET
    }
}

function createQuizFetchStart() {
    return {
        type: CREATE_QUIZ_FETCH_START
    }
}

function createQuizFetchSuccess() {
    return {
        type: CREATE_QUIZ_FETCH_SUCCESS
    }
}
function createQuizFetchError() {
    return {
        type: CREATE_QUIZ_FETCH_ERROR
    }
}

export function createQuizFinished() {
    return async (dispatch, getState) => {
        dispatch(createQuizFetchStart())

        try {
            await axios.post('quizes.json', getState().create.quiz)
            dispatch(createQuizFetchSuccess())
            dispatch(createQuizReset())
        } catch (error) {
            dispatch(createQuizFetchError())
        }
    }
}