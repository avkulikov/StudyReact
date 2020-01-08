import React, {Component} from 'react'
import {Button} from '../../components/Ui/Button/Button'
import {Input} from '../../components/Ui/Input/Input'
import {createControl} from '../../form/formFrameWork'
import classes from './QuizCreator.module.css'

function createOptionControl(id) {
    return createControl({
        label: `Вариант ${id}`,
        errorMessage: 'Значение не может быть пустым',
        id
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым',
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),

    }
}

export default class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: createFormControls()
    }

    addQuestionHandler = (params) => {

    }

    createQuizHandler = (params) => {

    }

    onChangeHandler = (value, controlName) => {
        /* const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = value
        control.touched = true
        control.valid = this.isValid(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({formControls, isFormValid}) */
    }

    renderControls = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            const {value, type, label, errorMessage, valid, touched, validation} = control

            return <React.Fragment key={controlName + index}>
                <Input
                    type={type}
                    label={label}
                    value={value}
                    valid={valid}
                    touched={touched}
                    shouldValidate={!!validation}
                    errorMessage={errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
                {index === 0 && <hr />}
            </ React.Fragment>
        })
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form
                        className={classes.QuizCreatorForm}
                        onSubmit={event => event.preventDefault()}
                    >
                        {this.renderControls()}

                        <select name="" id=""></select>
                        <Button
                            type="primary"
                            onClick={this.addQuestionHandler}
                        >
                            Добавить вопрос
                        </Button>
                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                        >
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}
