import React, {Component} from 'react'
import {Button} from '../../components/Ui/Button/Button'
import classes from './Auth.module.css'

export default class Auth extends Component {
    loginHandler = () => {

    }
    registerHandler = () => {

    }

    submitHandler = event => event.preventDefault()



    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <input type="text" />
                        <input type="text" />
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >
                            Войти
                        </Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}
