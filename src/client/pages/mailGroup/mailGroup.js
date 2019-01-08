import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MailGroup extends Component {


    render() {
        return (
            <NavLink to="/createMailList/uploadFile" activeClassName="is-active" >MailGroup</NavLink>

        )
    }
}
