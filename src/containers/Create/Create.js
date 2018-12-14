import React, { Component } from 'react';
import axios from 'axios';
import CreateIssue from "../../components/CreateIssue";

class Create extends Component{
    constructor(props){
        super(props);
        this.state = { data: [] };
    }
    makeCreateRequest(formData){
        return axios.post(`http://localhost:3000/api/issues/create`, formData)
            .then((response) => {
                console.info(response)
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render(){
        return(
            <CreateIssue onCreate={ ( formData ) => { this.makeCreateRequest(formData)}}/>
        )
    }
}

export default Create;
