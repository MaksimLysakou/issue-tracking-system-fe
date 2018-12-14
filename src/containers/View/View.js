import React, { Component } from 'react';
import axios from 'axios';
import ViewIssue from '../../components/ViewIssue';

class View extends Component{
    constructor(props){
        super(props);
        this.state = { data: [] };
    }
    makeViewRequest(formData) {
        return axios.post(`http://localhost:3000/api/issues/View`, formData)
            .then((response)=>{
                console.info(response);
            })
            .catch((error)=>{
                console.error(error);
            })

    }
    render(){
        return(
            <ViewIssue onView = { ( formData ) => {this.makeViewRequest(formData) } }/>
        )
    }

}

export default View;