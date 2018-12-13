import React, { Component } from 'react';
import axios from 'axios';
import CreateIssue from '../../components/CreateIssue/CreateIssue';

class Create extends Component{
    constructor(props){
        super(props);
        this.state = { data: [] };
    }
    makeCreateRequest(formData) {
        return axios.post(`http://localhost:3000/api/issue/create`, formData)
            .then((response)=>{
                console.info(response);
                localStorage.setItem('token', response.data.token);
            })
            .catch((error)=>{
                console.error(error);
            })

    }
    render(){
        return(
            <CreateIssue makeCreateRequest = { ( formData ) => {this.makeCreateRequest(formData) } }/>
        )
    }

}

export default Create;