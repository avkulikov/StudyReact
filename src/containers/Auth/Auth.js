import React, {Component} from 'react'
import {Button} from '../../components/Ui/Button/Button'
import {Input} from '../../components/Ui/Input/Input'
import is from 'is_js'
import classes from './Auth.module.css'

export default class Auth extends Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
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
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    loginHandler = () => {

    }
    registerHandler = () => {

    }

    submitHandler = event => event.preventDefault()

    isValid = (value, validation) => {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }

        if (validation.email) {
            isValid = is.email(value) && isValid
        }

        if (validation.minLength) {
            isValid = is.above(value.length, validation.minLength) && isValid
        }

        return isValid
    }


    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = event.target.value
        control.touched = true
        control.valid = this.isValid(control.value, control.validation)

        formControls[controlName] = control

        this.setState({formControls})
    }


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
