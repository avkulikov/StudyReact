import axios from '../../../utils/axios/axios.quiz'

import {
    QUIZES_FETCH_START,
    QUIZES_FETCH_SUCCESS,
    QUIZES_FETCH_ERROR,
} from '../constants'

export function fetchQuizes() {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const response = await axios.get('quizes.json')
            const quizes = []

            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })

            dispatch(fetchQuizesSuccess(quizes))
        } catch (error) {
            dispatch(fetchQuizesError(error))
        }
    }
}

export function fetchQuizesStart() {
    return {
        type: QUIZES_FETCH_START
    }
}

export function fetchQuizesSuccess(quizes) {
    return {
        type: QUIZES_FETCH_SUCCESS,
        quizes
    }
}

export function fetchQuizesError(error) {
    return {
        type: QUIZES_FETCH_ERROR,
        error
    }
}