import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Routing from '../routes/routes'

export default class Nav extends Component {
    render() {
        return (
            <div className="my-app">
                <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="http://localhost:3000/#/">
                                <img src={'https://cdn.taximail.com/webasset/images/cabby/cabby_signup_01.png?v=12'} alt="DEVAHOY LOGO" width="10%"  />
                            </a>
                        </div>
                        <div className="navbar-menu">
                            <div className="navbar-end">
                                {/* <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                                <NavLink to="/posts" activeClassName="is-active" className="navbar-item">Posts</NavLink>
                                <NavLink to="/projects" activeClassName="is-active" className="navbar-item">Projects</NavLink> */}
                                <NavLink to="/mailgroup" activeClassName="is-active" className="navbar-item">MailGroup</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                <Routing />
            </div>
        )
    }
}
