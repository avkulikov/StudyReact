import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import {Loader} from '../../../components/Ui/Loader/Loader'
import classes from '../styles/QuizList.module.css'


export default class QuizList extends Component {

    componentDidMount() {
        this.props.fetchQuizes()
    }

    renderQuizes = () => {

        if (this.props.quizes.length === 0) {

            return <ul><li>
                <NavLink
                    to={`/quiz-creator`}
                >
                    Тестов нет. Но вы держитесь. \/(-_-)\/
                </NavLink>
            </li></ul>
        }

        return this.props.quizes.map((quiz, index) => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink
                        to={`/quiz/${quiz.id}`}
                    >
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }


    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    {this.props.isLoading && this.props.quizes.length === 0
                        ? <Loader />
                        : <ul>{this.renderQuizes()}</ul>}

                </div>
            </div>
        )
    }
}