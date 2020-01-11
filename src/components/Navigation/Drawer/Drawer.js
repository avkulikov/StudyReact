import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import {Backdrop} from '../../Ui/Backdrop/Backdrop'
import classes from './Drawer.module.css'


export default class Drawer extends Component {

    clickHandler = () => this.props.onToggle()

    renderLinks = (links) => {
        return links.map(({to, label, exact}, index) => {
            return (
                <li key={label}>
                    <NavLink
                        to={to}
                        exact={exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {label}
                    </NavLink>
                </li>
            )
        })
    }
    render() {
        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        let links = [
            {to: '/', label: 'Список', exact: true},
        ]

        if (this.props.isAuthenticated) {
            links.push(
                {to: '/quiz-creator', label: 'Создать тест', exact: false},
                {to: '/logout', label: 'Выйти', exact: false},
            )
        } else {
            links.push({to: '/auth', label: 'Авторизаиця', exact: false})
        }

        return (
            <> {/* === <React.Fragment /> */}
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen && <Backdrop onClick={this.props.onToggle} />}
            </>
        )
    }
}