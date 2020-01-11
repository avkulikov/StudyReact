import axios, {API_KEY} from '../../axios/axios.auth'
import {
    AUTH_LOGOUT,
    AUTH_FETCH_START,
    AUTH_FETCH_SUCCESS,
    AUTH_FETCH_ERROR
} from './actionTypes'

export function auth(email, password, isLogin) {
    return async dispatch => {
        dispatch({type: AUTH_FETCH_START})

        const authData = {
            email,
            password,
            returnSecureToken: true
        }

        const url = isLogin ? `v1/accounts:signInWithPassword?key=${API_KEY}` : `v1/accounts:signUp?key=${API_KEY}`

        try {
            const response = await axios.post(url, authData)
            const data = response.data

            const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000).toLocaleString()

            localStorage.setItem('token', data.idToken)
            localStorage.setItem('userId', data.localId)
            localStorage.setItem('expirationDate', expirationDate)

            dispatch(authSuccess(data.idToken))
            dispatch(autoLogOut(data.expiresIn * 1000))
        } catch (error) {
            dispatch({type: AUTH_FETCH_ERROR, error});
        }
    }
}

function autoLogOut(timeout) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut())
        }, timeout);
    }
}

function logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')

    return {
        type: AUTH_LOGOUT,
    }
}

function authSuccess(token) {
    return {
        type: AUTH_FETCH_SUCCESS,
        token
    }
}