import React, { Component } from 'react';
import { Button } from "react-bulma-components/full"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './uploadFile.css'
import ModelUpload from '../ImportListMail/ModelUpload'
import ModelCopyPast from '../ImportListMail/ModelCopyAndPast'
import axios from 'axios'


let contacts = {
    name: 'sorte',
    phone: 'teera'
}

export default class UploadFile extends Component {
    state = { username: null };
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            name: 'sorte',
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
        this.setState({ value: event.target.value });
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

                <Button id="upload" color="danger" size="large" rounded outlined data-toggle="modal" data-target="#uploadFile">upload file CSV</Button>
                <Button id="upload" color="info" size="large" rounded outlined data-toggle="modal" data-target="#copyPast">COPY & PAST</Button>

                <br />
                <br />
                <ModelUpload />
                <ModelCopyPast />





            </div>
        );
    }
}
