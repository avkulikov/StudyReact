import React from 'react'

import ActiveQuiz from './ActiveQuiz/ActiveQuiz'
import FinishedQuiz from './FinishedQuiz/FinishedQuiz'
import {Loader} from '../../../components/Ui/Loader/Loader'
import classes from '../styles/Quiz.module.css'


export default class Quiz extends React.Component {

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