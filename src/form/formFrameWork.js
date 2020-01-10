import is from 'is_js'

export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}

function isValid(value, validation) {

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

function isFormValid(formControls) {
    let isFormValid = true

    Object.keys(formControls).forEach(name => {
        isFormValid = formControls[name].valid && isFormValid
    })

    return isFormValid
}

export function onChangeHandler(value, controlName) {
    const formControls = {...this.state.formControls}
    const control = {...formControls[controlName]}

    control.value = value
    control.touched = true
    control.valid = isValid(control.value, control.validation)

    formControls[controlName] = control

    this.setState({formControls, isFormValid: isFormValid(formControls)})
}