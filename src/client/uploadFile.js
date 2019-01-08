import React, { Component } from 'react';
import './app.css';
import { Button } from "react-bulma-components/full"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './uploadFile.css'
import ContactsList from './component/ContactsList'
import ModelUpload from './component/ModelUpload'
import ModelCopyPast from './component/ModelCopyAndPast'
import axios from 'axios'

import ReactImage from './react.png';

let contacts = {
    name : 'sorte',
    phone : 'teera'
}

export default class App extends Component {
    state = { username: null };
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            name : 'sorte',
            value: '',
            selectedFile: null,
            persons: []
          }
    
      }

    componentDidMount() {
       
        axios.get(`/api/v1/schedule/5c32b92708d9160046a3e1fe`)
            .then(res => {
              const persons = res.data;
              this.setState({ persons });
            })
        
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value});
      }

    handleSubmit = (event) => {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        const { username } = this.state;
        console.log(this.state.persons);
        
        return (
            <div align="center">
                {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
                <Button id = "upload" color="danger" size="large" rounded outlined data-toggle="modal" data-target="#uploadFile">upload file CSV</Button>
                <Button id = "upload" color="info" size="large" rounded outlined data-toggle="modal" data-target="#copyPast">COPY & PAST</Button>

                <br />
                <br />
                <ModelUpload/>
                <ModelCopyPast/>
              
                
                 <ContactsList contacts = {this.state.name}/>
        
        
        </div>
        );
    }
}
