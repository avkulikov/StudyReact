import React, {useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {logOut} from '../../store/actions/auth'

const Logout = ({logout}) => {
    useEffect(() => {
        logout()
    }, [])

    return <Redirect to='/' />
}


function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(Logout)