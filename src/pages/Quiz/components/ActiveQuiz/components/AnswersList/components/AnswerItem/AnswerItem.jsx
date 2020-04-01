import React from 'react'
import classes from './styles/AnswerItem.module.css'

export const AnswerItem = ({answer: {text, id}, state, onAnswerClick}) => {

    const cls = [classes.AnswerItem]
    if (state) {
        cls.push(classes[state])
    }

    return (
        <li
            className={cls.join(' ')}
            onClick={() => onAnswerClick(id)}
        >
            {text}
        </li>
    )
}