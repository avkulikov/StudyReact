import React from 'react'
import classes from './Input.module.css'

export const Input = ({
    type = 'text', label, value, onChange,
    valid, touched, shouldValidate,
    errorMessage = 'Введите верное значение'
}) => {

    const cls = [classes.Input]
    const htmlFor = `${type}-${Math.random()}`

    const isInvalid = () => !valid && shouldValidate && touched

    if (isInvalid()) {
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                type={type}
                id={htmlFor}
                value={value}
                onChange={onChange}
            />
            {isInvalid() && <span>{errorMessage}</span>}
        </div>
    )
}
