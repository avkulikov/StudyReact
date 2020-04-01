import React from 'react'
import classes from './styles/AnswersList.module.css'
import {AnswerItem} from './components/AnswerItem/AnswerItem'

const AnswerList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    answer={answer}
                    key={index}
                    onAnswerClick={props.onAnswerClick}
                    state={props.state ? props.state[answer.id] : null}
                />
            )
        })}
    </ul>
)
export default AnswerList
