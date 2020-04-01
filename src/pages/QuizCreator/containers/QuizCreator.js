import {connect} from 'react-redux'
import QuizCreator from '../components/QuizCreator'

import {createQuizFinished, createQuizQuestion} from '../actions/create'


function mapStateToProps(state) {
    return {
        quiz: state.create.quiz,
        isLoading: state.create.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createQuizQuestion: item => dispatch(createQuizQuestion(item)),
        createQuizFinished: () => dispatch(createQuizFinished())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator)