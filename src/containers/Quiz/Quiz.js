import React from 'react'
import {connect} from 'react-redux'

import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import {Loader} from '../../components/Ui/Loader/Loader'
import classes from './Quiz.module.css'

import {fetchQuizById, quizAnswerClick, quizRetry} from '../../store/actions/quiz'

class Quiz extends React.Component {

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.quizRetry()
    }

    renderNeedQuiz = () => {

        if (this.props.isFinished) {
            return <FinishedQuiz
                results={this.props.results}
                quiz={this.props.quiz}
                onRetry={this.props.quizRetry}
            />
        }

        return <ActiveQuiz
            answers={this.props.quiz[this.props.activeQuestion].answers}
            question={this.props.quiz[this.props.activeQuestion].question}
            onAnswerClick={this.props.quizAnswerClick}
            quizLength={this.props.quiz.length}
            answerNumber={this.props.activeQuestion + 1}
            state={this.props.answerState}
        />
    }

    render() {

        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {this.props.isLoading || !this.props.quiz
                        ? <Loader />
                        : this.renderNeedQuiz()
                    }
                </div>
            </div>
        )
    }
}


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