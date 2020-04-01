import React, {Component} from 'react'

import {Button} from '../../../components/Ui/Button/Button'
import {Input} from '../../../components/Ui/Input/Input'
import {createControl, onChangeHandler} from '../../../utils/form/formFrameWork'
import classes from '../styles/Auth.module.css'


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

    loginHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            true
        )
    }
    registerHandler = () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            false
        )
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