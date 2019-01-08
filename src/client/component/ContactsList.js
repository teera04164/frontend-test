import React from 'react'

class ContactsList extends React.Component {
    render() {
        console.log(this.props.contacts);
        
        return (
            <ul>
                <li> Hello world </li>
            </ul>
        )
    }

}

export default ContactsList