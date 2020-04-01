import React from 'react'

import AnswersList from './components/AnswersList/AnswersList'
import classes from './styles/ActiveQuiz.module.css'

export default function ActiveQuiz(props) {
    return <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.answerNumber}.&nbsp;</strong>{props.question}

            </span>

            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>
        <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
        />
    </div>
}