import React from 'react'

import classes from './Select.module.css'

export const Select = ({options, label, value, onChange}) => {
    const htmlFor = `${label}-${Math.random()}`

    return (
        <div className={classes.Select}>
            <label htmlFor={htmlFor}>{label}</label>
            <select
                id={htmlFor}
                value={value}
                onChange={onChange}
            >
                {options.map((option, index) => {
                    return (
                        <option
                            key={option.value + index}
                            value={option.value}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}
