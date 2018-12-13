import React, { Component } from 'react';
import axios from 'axios';
import ViewIssue from '../../components/ViewIssue/ViewIssue';

class View extends Component{
    constructor(props){
        super(props);
        this.state = { data: [] };
    }
    makeViewRequest(formData) {
        return axios.post(`http://localhost:3000/api/issue/View`, formData)
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
            <ViewIssue makeCViewRequest = { ( formData ) => {this.makeViewRequest(formData) } }/>
        )
    }

}

export default Create;