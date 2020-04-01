import axios from '../../../utils/axios/axios.quiz'

import {
    QUIZ_FETCH_SUCCESS,
    QUIZ_SET_STATE,
    QUIZ_FINISH,
    QUIZ_NEXT_QUESTION,
    QUIZ_RETRY_TEST
} from '../constants'

import {fetchQuizesStart, fetchQuizesError} from '../../QuizList/actions/quizList'


export function fetchQuizById(quizId) {
    return async dispatch => {
        dispatch(fetchQuizesStart())

        try {
            const response = await axios.get(`quizes/${quizId}.json`)
            const quiz = response.data

            dispatch(fetchQuizSuccess(quiz))
        } catch (error) {
            dispatch(fetchQuizesError(error))
        }
    }
}

export function fetchQuizSuccess(quiz) {
    return {
        type: QUIZ_FETCH_SUCCESS,
        quiz
    }
}

export function quizSetState(answerState, results) {
    return {
        type: QUIZ_SET_STATE,
        answerState, results
    }
}

export function quizFinish() {
    return {
        type: QUIZ_FINISH
    }
}

export function quizNextQuestion(nextQuestion) {
    return {
        type: QUIZ_NEXT_QUESTION,
        nextQuestion
    }
}

function isQuizFinished(state) {
    return state.activeQuestion + 1 === state.quiz.length
}
export function quizAnswerClick(answerId) {
    return (dispatch, getState) => {
        const state = getState().quiz

        if (state.answerState) {
            const key = Object.keys(state.answerState)[0]
            if (state.answerState[key] === 'success') {
                return
            }
        }

        const question = state.quiz[state.activeQuestion]
        const results = state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            dispatch(quizSetState({[answerId]: 'success'}, results))
            const timeout = window.setTimeout(() => {
                if (isQuizFinished(state)) {
                    dispatch(quizFinish())
                }
                else {
                    dispatch(quizNextQuestion(state.activeQuestion + 1))
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            dispatch(quizSetState({[answerId]: 'error'}, results))
        }
    }
}

export function quizRetry() {
    return {
        type: QUIZ_RETRY_TEST
    }
}