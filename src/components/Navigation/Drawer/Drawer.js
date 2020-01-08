import React, {Component} from 'react'
import {Backdrop} from '../../Ui/Backdrop/Backdrop'
import classes from './Drawer.module.css'

const links = [
    1, 2, 3
]
export default class Drawer extends Component {

    renderLinks = () => {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a href="">Link {link}</a>
                </li>
            )
        })
    }
    render() {
        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
            <> {/* === <React.Fragment /> */}
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen && <Backdrop onClick={this.props.onToggle} />}
            </>
        )
    }
}