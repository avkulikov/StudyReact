import {combineReducers} from 'redux'
import quizReducer from '../../pages/Quiz/reducers/quiz'
import quizListReducer from '../../pages/QuizList/reducers/quizList'
import createReducer from '../../pages/QuizCreator/reducers/create'
import authReducer from '../../pages/Auth/reducers/auth'

export default combineReducers({
    quiz: quizReducer,
    quizList: quizListReducer,
    create: createReducer,
    auth: authReducer
})