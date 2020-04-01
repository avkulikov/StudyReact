import {connect} from 'react-redux'
import Quiz from '../components/Quiz'

import {
    fetchQuizById,
    quizAnswerClick,
    quizRetry
} from '../actions/quiz'


function mapStateToProps(state) {
    return {
        quiz: state.quiz.quiz,
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        activeQuestion: state.quiz.activeQuestion,
        answerState: state.quiz.answerState,
        isLoading: state.quiz.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        quizRetry: () => dispatch(quizRetry())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)