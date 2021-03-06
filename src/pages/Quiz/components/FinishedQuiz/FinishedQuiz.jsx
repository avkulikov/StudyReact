import React from 'react'

import {Button} from '../../../../components/Ui/Button/Button'
import {Link} from 'react-router-dom'
import classes from './styles/FinishedQuiz.module.css'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).filter(key => props.results[key] === 'success')

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        const cls = [
                            'fa',
                            props.results[quizItem.id] === 'error'
                                ? 'fa-times'
                                : 'fa-check',
                            classes[props.results[quizItem.id]]
                        ]

                        return <li key={index}>
                            <strong>{index + 1}.&nbsp;</strong>
                            {quizItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    })
                }
            </ul>
            <p>Правильно {successCount.length} из {props.quiz.length}</p>
            <div>
                <Button
                    onClick={props.onRetry}
                    type="primary"
                    disabled={false}
                >
                    Повторить
                </Button>
                <Link to="/">
                    <Button
                        onClick={props.onRetry}
                        type="success"
                        disabled={false}
                    >
                        Перейти в список тестов
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz