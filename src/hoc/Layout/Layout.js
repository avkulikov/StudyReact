import React from 'react'
import {connect} from 'react-redux'

import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import classes from './Layout.module.css'


class Layout extends React.Component {
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

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout)