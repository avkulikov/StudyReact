import {connect} from 'react-redux'
import QuizList from '../components/QuizList'

import {fetchQuizes} from '../actions/quizList'


function mapStateToProps(state) {
    return {
        quizes: state.quizList.quizes,
        isLoading: state.quizList.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)