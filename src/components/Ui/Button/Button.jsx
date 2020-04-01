import React from 'react'

import classes from './Button.module.css'

export const Button = ({children, onClick, disabled = false, type}) => {
    const cls = [
        classes.Button,
        classes[type]
    ]
    return (
        <button
            onClick={onClick}
            className={cls.join(' ')}
            disabled={disabled}
        >
            {children}
        </button>
    )
}