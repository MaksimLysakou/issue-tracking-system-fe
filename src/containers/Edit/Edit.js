import React, { Component } from 'react';
import axios from 'axios';
import EditIssue from '../../components/EditIssue';

class Edit extends Component{
    constructor(props){
        super(props);
        this.state = { data: [] };
    }
    makeEditRequest(formData) {
        return axios.post(`http://localhost:3000/api/issues/Edit`, formData)
            .then((response)=>{
                console.info(response);
            })
            .catch((error)=>{
                console.error(error);
            })

    }
    render(){
        return(
            <EditIssue onEdit = { ( formData ) => {this.makeEditRequest(formData) } }/>
        )
    }

}

export default Edti;