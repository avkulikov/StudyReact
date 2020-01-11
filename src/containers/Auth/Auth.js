import React, {Component} from 'react'
import {Button} from '../../components/Ui/Button/Button'
import {Input} from '../../components/Ui/Input/Input'
import {createControl, onChangeHandler} from '../../form/formFrameWork'
import axios from '../../axios/axios.auth'
import classes from './Auth.module.css'

/* v1/accounts:signUp?key=[API_KEY] */
const API_KEY = 'AIzaSyBLZM1LxRIwYMGWcaWybhfCy9wLv5qyixM'
export default class Auth extends Component {
    constructor (props) {
        super(props)

        this.onChangeHandler = onChangeHandler.bind(this)
    }

    state = {
        isFormValid: false,
        formControls: {
            email: createControl({
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
            }, {
                required: true,
                email: true
            }),
            password: createControl({
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
            }, {
                required: true,
                minLength: 6
            })
        }
    }

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            const {value, type, label, errorMessage, valid, touched, validation} = control

            return (
                <Input
                    key={controlName + index}
                    type={type}
                    label={label}
                    value={value}
                    valid={valid}
                    touched={touched}
                    shouldValidate={!!validation}
                    errorMessage={errorMessage}
                    onChange={event => this.onChangeHandler(event.target.value, controlName)}
                />
            )
        })
    }

    loginHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }

        try {
            const response = await axios.post(`v1/accounts:signInWithPassword?key=${API_KEY}`, authData)
            console.log('response', response)
        } catch (error) {
            console.error(error);
        }
    }
    registerHandler = async () => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }

        try {
            const response = await axios.post(`v1/accounts:signUp?key=${API_KEY}`, authData)
            console.log('response', response)
        } catch (error) {
            console.error(error);
        }
    }
    submitHandler = event => event.preventDefault()


    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        {this.renderInputs()}
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Войти
                        </Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}
