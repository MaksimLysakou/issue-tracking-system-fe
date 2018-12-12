import React, { Component } from 'react';
import axios from 'axios';
import RegistrationPage from "../../components/RegistrationPage/RegistrationPage";

class Registration extends Component{
    constructor(props){
        super(props);
        this.state = { data: [] };
    }
    makeRegistrationRequest(formData){
        return axios.post(`http://localhost:3000/api/users/register`, formData)
            .then((response) => {
                console.info(response)
            })
            .catch((error) => {
                console.error(error);
            })
    }

    render(){
        return(
            <RegistrationPage onRegistration={ ( formData ) => { this.makeRegistrationRequest(formData)}}/>
        )
    }
}

export default Registration;
