import React, {useEffect} from 'react'
import {Redirect} from 'react-router-dom'

const Logout = ({logout}) => {
    useEffect(() => {
        logout()
    }, [logout])

    return <Redirect to='/' />
}

export default Logout