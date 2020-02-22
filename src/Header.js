import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    
    header = {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '20px',
        fontSize: '26px'
    }
    render() {
        return (
            <div style={this.header}>
                <NavLink exact to="/" >
                Home
                </NavLink>
                
            </div>
        )
    }
}

export default Header