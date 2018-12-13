import React, { Component } from 'react';
import axios from 'axios';
import EditIssue from '../../components/EditIssue/EditIssue';

class Edit extends Component{
    constructor(props){
        super(props);
        this.state = { data: [] };
    }
    makeEditRequest(formData) {
        return axios.post(`http://localhost:3000/api/issue/Edit`, formData)
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
            <EditIssue makeCEditRequest = { ( formData ) => {this.makeEditRequest(formData) } }/>
        )
    }

}

export default Create;