import React from 'react'

import MenuToggle from '../../../Navigation/MenuToggle/MenuToggle'
import Drawer from '../../../Navigation/Drawer/Drawer'
import classes from '../styles/Layout.module.css'


export default class Layout extends React.Component {
    state = {
        menu: false
    }
    toggleMenuHandler = () => {
        this.setState({menu: !this.state.menu})
    }
    render() {
        return (
            <div className={classes.Layout}>
                <Drawer
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                    isAuthenticated={this.props.isAuthenticated}
                />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}